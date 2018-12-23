const express = require("express");
const app = express();

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("./webpack.config");

app.use(
  webpackDevMiddleware(webpack(webpackConfig), {
    hot: true,
    publicPath: webpackConfig.output.publicPath
  })
);
app.use(
  webpackHotMiddleware(webpack(webpackConfig), {
    log: false,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000
  })
);

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
