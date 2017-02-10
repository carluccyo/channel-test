var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var channel = require('./src/channel');


// parse application/json
app.use(bodyParser.json());

app.use('/api/channel', channel);

app.get('/', function(req, res) {

  var obj = {};
  obj.title = 'Hello World!';

  res.send(obj);
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
})
