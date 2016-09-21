var webpack = require('webpack');

module.exports = {
    /**入口js*/
    entry: {
        common: ['react', 'react-dom'],
        setTimeout: 'scripts/entry/setTimeoutEntry.js',
        midware: 'scripts/entry/midwareEntry.js',
        saga: 'scripts/entry/sagaEntry.js'
    },
    /**打包构建js*/
    output: {
        path: __dirname + '/app/build/js',//构建路径
        publicPath: '/redux_async/app/build/js/',//使用按需加载必须配置
        filename: '[name].bundle.js'//构建文件名
    },
    /**加载器*/
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    /**插件配置*/
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({//踢出公共js
            name: 'common',
            minChunks: Infinity
        })
    ],
    /**路径解决*/
    resolve: {
        alias: {
            rootPath: __dirname,
            scripts: __dirname + '/app/src/js'
        },
        extensions: ['', '.js', '.jsx']
    }
};