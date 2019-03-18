const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清理文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin') // html引擎
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const prod = process.env.NODE_ENV
const final = buildEntriesAndHTML()
const interfaces = require('os').networkInterfaces() // 在开发环境中获取局域网中的本机iP地址
let IPAdress = ''
for (var devName in interfaces) {
  var iface = interfaces[devName]
  for (var i = 0; i < iface.length; i++) {
    var alias = iface[i]
    if (
      alias.family === 'IPv4' &&
      alias.address !== '127.0.0.1' &&
      !alias.internal
    ) {
      IPAdress = alias.address
    }
  }
}
var getPath = function() {
  if (prod == 'production') {
    //生产环境
    return {
      path: 'release'
    }
  } else if (prod == 'appstore') {
    //生产appstore环境
    return {
      path: 'appstore'
    }
  } else if (prod == 'test') {
    //测试环境
    return {
      path: 'test'
    }
  } else {
    return {
      path: 'test'
    }
  }
}
const base = {
  mode: 'development',
  entry: final.entries,
  output: {
    path: path.join(__dirname, getPath().path),
    filename: 'js/[name].[hash].js'
  },
  devServer: {
    stats: 'errors-only',
    host: IPAdress || 'localhost' // 这里也可以写死本地ip
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /(\.jpg|\.jpeg|\.gif|\.png)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              publicPath: '../images/',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(
        process.env.NODE_ENV === 'production' ? 'PUB_HOST' : 'DEV_HOST'
      )
    }),
    new CleanWebpackPlugin([getPath().path]),
    new MiniCssExtractPlugin({
      filename: '[name]_css/[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin([{ from: './static', to: './' }]),

    ...final.htmls
  ],

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  externals: {} // 用来配置require的返回。一般用于加载cdn
}

function buildEntriesAndHTML() {
  // js文件下每个js文件对应一个页面
  const result = glob.sync('./src/js/*.js')
  const entries = {}
  const htmls = []
  result.forEach(function(page) {
    var n = page.slice(page.lastIndexOf('js/') + 3, page.length - 2)
    n = n.slice(0, n.lastIndexOf('/')) //接着我对路径字符串进行了一些裁剪成想要的路径
    entries[n] = page
    htmls.push(
      new HtmlWebpackPlugin({
        filename: n + '.html',
        template: path.resolve(__dirname, './src/' + n + '.html'),
        chunks: [n, 'vendors'],
        minify: {
          //压缩HTML文件
          removeComments: true //移除HTML中的注释
        }
      })
    )
  })
  return {
    entries,
    htmls
  }
}
module.exports = base
