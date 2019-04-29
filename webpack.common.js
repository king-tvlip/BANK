const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public', 'index.html'),
    filename: 'index.html',
    inject: true,
  });

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        sourceMap: true,
        localIdentName: '[local]__[hash:base64:5]'
    }
}

const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: [
            autoprefixer({
                browsers:['ie >= 8', 'last 4 version']
            })
        ],
        sourceMap: true
    }
}

const DefinePluginConfig = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
});


const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
});

  console.log(DefinePluginConfig);

module.exports = {
    entry: path.join(__dirname,'src','app.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[c|a]ss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    CSSModuleLoader,
                    postCSSLoader, 
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff(2)?|ttf|eot|)$/i,
                loader: 'file-loader',
                options: {
                  name: '[hash].[ext]',
                  outputPath: 'assets'
                },
            }
        ]
    },
    
    plugins: [
        HtmlWebpackPluginConfig,
        DefinePluginConfig,
        MiniCssExtractPluginConfig
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app-bundle.js',
    },

}