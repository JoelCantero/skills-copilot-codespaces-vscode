// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var port = 8080;
var comments = [];

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  var path = parsedUrl.pathname;
  if (path === '/addComment') {
    var comment = parsedUrl.query.comment;
    comments.push(comment);
  }
  if (path === '/getComments') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(comments));
  }
  if (path === '/') {
    var html = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  }
});

server.listen(port, function() {
  console.log('Server running at http://localhost:' + port);
});