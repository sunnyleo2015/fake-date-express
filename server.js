var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')

var app = new (require('express'))()
var port = 3000
var item = [
    {
      type:"text",
        id:1
    },
    {
      type:"date",
        id:2
    },
    {
      type:"text",
        id:3
    }
  ];

var compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath, historyApiFallback: true  }))
app.use(webpackHotMiddleware(compiler));

app.get("/item", function(req, res) {
  res.jsonp(item);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get("/setItem", function(req, res){
    var itemList = req.query.data;
    var itemSetList = [];
    console.log(itemList);
    //item = req.query.data;
    for(var i=0; i<itemList.length; i++){
        if('key' in itemList[i]){
            itemList[i].id = itemList[i].key;
            delete itemList[i].key;
        }
        itemSetList.push(itemList[i]);
    }
    item  = itemSetList;
    console.log(item);
    res.send('ok');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
