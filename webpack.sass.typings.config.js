/*
 *  Copyright (c) 2018 Daimler AG. All rights reserved.
 *  Implemented 2018 by DCCS GmbH.
 */
var path = require('path');
var requireContext = require('require-context');

var context = requireContext(path.resolve(__dirname, "app/themes"), true, /\.scss$/);

var scssFiles = {};
context.keys().forEach(function (filename, idx) {
  scssFiles[idx] = './app/themes/' + filename;
});


module.exports = {
  entry: scssFiles,

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.js', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "app/themes")
        ],
        use: [
          {loader: "style-loader"},
          {
            loader: "typings-for-css-modules-loader",
            options: {
              namedExport: true,
              camelCase: true,
              modules: true
            }
          },
          {loader: "sass-loader"}
        ]
      }
    ]
  }
};
