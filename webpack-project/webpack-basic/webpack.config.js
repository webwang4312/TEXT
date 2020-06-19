const path = require('path');
//console.log(path.resolve('dist'))
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const { loader } = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',//模式两种production\development生产开发
    entry: './src/index.js',  //入口
    output: {
        filename: 'bundle.js',//打包后的文件名 
        path: path.resolve(__dirname, 'dist'),//路径必须是一个绝对路径,_dirname以当前目录
    },
    devServer: {
        port: 8000,  //端口设置
        progress: true,
        //gzip压缩：
        compress: true,
        // 添加打包文件夹路径
        contentBase: "./dist"
    },
    plugins: [ // 插件 数组 放所有webpack插件
        new htmlWebpackPlugin({
            template: './src/index.html',//指定模板
            filename: 'index.html',//打包后的文件名 默认也是index.html
            minify: {//压缩
                removeAttributeQuotes: true,//去除html页面中的双引号
                collapseWhitespace: true//显示在一行上
            },
            hash: true,//添加hash 是在index.html页面里面引入js时候给js添加hash 并不是index.html文件                       名添加hash
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new UglifyJsPlugin({
            //  cache: true,//是否缓存
            //  parallel: true,//是否并发打包
            //  sourcMap: true
        }),
        new OptimizeCSSAssetsPlugin({
            // assetNameRegExp:/\.css$/g,
            // cssProcessor:require('cssnano'),
            // cssProcessorPluginOptions:{
            // 	preset:['default',{discardComments:{removeAll:true}}]
            // },
            // canPrint:true
        }),

    ],

    module: {
        rules: [
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: 'url-loader?limit=16940'
            },
            {
                test: /\.js$/, use: {
                    loader: 'babel-loader', options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: [/\.css/],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: [/\.less/],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            },
        ]
    },
}