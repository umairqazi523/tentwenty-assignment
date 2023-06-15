const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/assets/js/index.js',
        output: {
            filename: isProduction ? 'assets/js/[name].[contenthash].js' : 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                    include: path.resolve(__dirname, 'src/assets/styles'),
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                inject: 'body',
            }),
            new MiniCssExtractPlugin({
                filename: isProduction ? 'assets/css/[name].[contenthash].css' : 'styles.css',
            }),
            new CopyWebpackPlugin({
                patterns: [{
                    from: './src/assets/images',
                    to: 'assets/images',
                }, ],
            }),
        ],
        devServer: {
            static: './dist',
            port: 3000,
        },
    };
};