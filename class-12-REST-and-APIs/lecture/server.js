var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
// var port = process.argv[2] || 3000;  // specify port at the command line: node server.js 8000

app.use(express.static('./public/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function() {
  console.log('listening on port', port);
});
