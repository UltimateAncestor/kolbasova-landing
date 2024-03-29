const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
            allChunks: true
        })
    ],
    module: {
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins:['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.css$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        }
                    },
                ],
            },
        ]
    },
    devServer: {
        watchContentBase: true,
        writeToDisk: true,
        watchOptions:{
            poll: 1000
        },
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 3000,
        open: true,
        openPage: 'index.html'
    },
};
