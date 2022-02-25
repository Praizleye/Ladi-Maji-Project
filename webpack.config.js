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
  entry: {
   
   App: './src/App.js',
   About: './src/About.js',
   Contact: './src/Contact.js',
    Partner: './src/Partner.js',
    Style: './src/Styles/Landingpage.css',


  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[contenthash].js',
    //clean: true,
   
  },
 // devtool: "source-map",

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
     // new CssMinimizerPlugin(),
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
        template: './templateHome.html',
        filename: "Home.html",
       chunks: ['Style', 'App' ],
      }),
      new HtmlWebpackPlugin({ 
        filename: "About.html",
        template: './templateAbout.html',
        chunks: ['Style', 'About'],
      }),
      new HtmlWebpackPlugin({ 
        filename: "Contact.html",
        template: './templateContact.html',
        chunks: [ 'Style', 'Contact'],
      }),
      new HtmlWebpackPlugin({ 
        filename: "Partner.html",
        template: './templatePartner.html',
        chunks: ['Style', 'Partner'],
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
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
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //   type: 'asset/resource',
        // },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
    

        
      ],
    },
  

 };
