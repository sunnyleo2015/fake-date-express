var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')

var app = new (require('express'))()
var port = 3000
var item = [
    {
      type:"text",
    },
    {
      type:"date",
    },
    {
      type:"text",
    }
  ];

var compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler));

app.get("/item", function(req, res) {
  res.jsonp(item);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get("/setItem", function(req, res){
  item = req.query.data;
  console.log(item);
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
