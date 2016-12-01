var http = require("http");
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res) {
 var date = new Date();
 var urlData = url.parse(req.url, true);
 res.end(JSON.stringify(date.getHours()) + ":" + JSON.stringify(date.getMinutes()) + ", url data: " + JSON.stringify(urlData));
})

server.listen(process.env.PORT || 3000);

/*
{
  "name": "dry-wildwood-56068",
  "version": "1.0.0",
  "description": "",
  "main": "hora.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node hora.js"
  },
  "author": "",
  "license": "ISC"
}
*/