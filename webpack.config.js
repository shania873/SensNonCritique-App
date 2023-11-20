const path = require("path");

module.exports = {
  entry: "./src/index.js", // Chemin vers le point d'entrée de votre application
  output: {
    path: path.resolve(__dirname, "dist"), // Dossier de sortie pour les fichiers générés
    filename: "bundle.js", // Nom du fichier généré
  },
  devServer: {
    inline: true,
    contentBase: "./src",
    port: 3000,
    historyApiFallback: true,
  },
  node: {
    fs: "empty",
  },
  devtool: false,
  devtool: debug ? "cheap-module-eval-source-map" : false,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-object-rest-spread",
            ["@babel/plugin-proposal-decorators", { legacy: true }],
          ],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: debug
          ? [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
              },
              {
                loader: "sass-loader",
              },
            ]
          : [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000,
              name: "./assets/fonts/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      cwd: process.cwd(),
    }),
    new webpack.DefinePlugin({ STRS_ENV, FG_ID, STRS_API_URL }),
    new NodeEnvPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CompressionPlugin({
      test: /\.(html|css|js|gif|svg|ico|woff|ttf|eot)$/,
      exclude: /(node_modules)/,
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          ie8: true,
          safari10: true,
          sourceMap: true,
        },
      }),
    ],
  },
};
