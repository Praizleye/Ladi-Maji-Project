const path = require('path');
//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

module.exports = {
    mode: 'production',
  entry: [
    './src/App.js',
    './src/Styles/Landingpage.css',
    './src/Styles/About.css',
    //'./src/Assets',

],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[contenthash].js',
   // clean: true,
   
  },
  // devtool: "false",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],

              [
                "svgo",
                {
                  plugins: extendDefaultPlugins([
                    {
                      name: "removeViewBox",
                      active: false,
                    },
                    {
                      name: "addAttributesToSVGElement",
                      params: {
                        attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                      },
                    },
                  ]),
                },
              ],
            ],
          },
        },
      }),
    ],
  },
  
  plugins: [
      new HtmlWebpackPlugin({
        template: './template.html',
      }),
      new HtmlWebpackPlugin({ 
        filename: "About.html",
        template: './src/About.html',
        chunks: [],
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
      // new MiniCssExtractPlugin({
      //   filename: "[name].[contenthash].css",
      //   template: './src/About.css'
      // }),
    ],

    //loaders
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        },
        {
          test: /\.css$/i,
          use: [
            {
               loader: MiniCssExtractPlugin.loader,
               options: {
                 publicPath :"",
             
                },

            }, 
            "css-loader"
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        // {
        //   test: /\.html$/,
        //   type: "asset/resource",
        //   generator: {
        //     filename: "[name][ext]",
        //   },
        // },
        // {
        //   test: /\.html$/i,
        //   use: ["extract-loader", "html-loader"],
        // },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
              filename: "[name][ext]",
            },
        },
      ],
    },
  

};