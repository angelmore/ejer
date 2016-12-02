var http = require("http");
var fs = require('fs');
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res) {
 var date = new Date();
 var urlData = url.parse(req.url, true);
 try {
  if(urlData['pathname'] == '/')
   fileBuffer =  fs.readFileSync("public/index.html");
  else
   fileBuffer =  fs.readFileSync("public/" + urlData['pathname']);
  res.end(fileBuffer);
 } catch(e) {
  res.writeHead(404, {"Location": urlData['pathname']});
  res.end();
 }
})

var http = require("http");
var fs = require('fs');
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res) {
 var date = new Date();
 var urlData = url.parse(req.url, true);
 try {
  if(urlData['pathname'] == '/')
   fileBuffer =  fs.readFileSync("public/index.html");
  else
   fileBuffer =  fs.readFileSync("public/" + urlData['pathname']);
  res.end(fileBuffer);
 } catch(e) {
  res.writeHead(404, {"Location": urlData['pathname']});
  res.end();
 }
})

var http = require("http");
var fs = require('fs');
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res) {
 var date = new Date();
 var urlData = url.parse(req.url, true);
 try {
  if(urlData['pathname'] == '/')
   fileBuffer =  fs.readFileSync("public/index.html");
  else
   fileBuffer =  fs.readFileSync("public/" + urlData['pathname']);
  res.end(fileBuffer);
 } catch(e) {
  res.writeHead(404, {"Location": urlData['pathname']});
  res.end();
 }
})

var http = require("http");
var fs = require('fs');
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res) {
 var date = new Date();
 var urlData = url.parse(req.url, true);
 try {
  if(urlData['pathname'] == '/')
   fileBuffer =  fs.readFileSync("public/index.html");
  else
   fileBuffer =  fs.readFileSync("public/" + urlData['pathname']);
  res.end(fileBuffer);
 } catch(e) {
  res.writeHead(404, {"Location": urlData['pathname']});
  res.end();
 }
})

var http = require("http");
var fs = require('fs');
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res) {
 var date = new Date();
 var urlData = url.parse(req.url, true);
 try {
  if(urlData['pathname'] == '/')
   fileBuffer =  fs.readFileSync("public/index.html");
  else
   fileBuffer =  fs.readFileSync("public/" + urlData['pathname']);
  res.end(fileBuffer);
 } catch(e) {
  res.writeHead(404, {"Location": urlData['pathname']});
  res.end();
 }
})

var http = require("http");
var fs = require('fs');
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res) {
 var date = new Date();
 var urlData = url.parse(req.url, true);
 try {
  if(urlData['pathname'] == '/')
   fileBuffer =  fs.readFileSync("public/index.html");
  else
   fileBuffer =  fs.readFileSync("public/" + urlData['pathname']);
  res.end(fileBuffer);
 } catch(e) {
  res.writeHead(404, {"Location": urlData['pathname']});
  res.end();
 }
})

var http = require("http");
var fs = require('fs');
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res) {
 var date = new Date();
 var urlData = url.parse(req.url, true);
 try {
  if(urlData['pathname'] == '/')
   fileBuffer =  fs.readFileSync("public/index.html");
  else
   fileBuffer =  fs.readFileSync("public/" + urlData['pathname']);
  res.end(fileBuffer);
 } catch(e) {
  res.writeHead(404, {"Location": urlData['pathname']});
  res.end();
 }
})

var http = require("http");
var fs = require('fs');
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res) {
 var date = new Date();
 var urlData = url.parse(req.url, true);
 try {
  if(urlData['pathname'] == '/')
   fileBuffer =  fs.readFileSync("public/index.html");
  else
   fileBuffer =  fs.readFileSync("public/" + urlData['pathname']);
  res.end(fileBuffer);
 } catch(e) {
  res.writeHead(404, {"Location": urlData['pathname']});
  res.end();
 }
})