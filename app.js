/**
 * Module dependencies.
 */

var express = require('express')
    ,io = require("./node_modules/socket.io");
var app = express.createServer();
var port = process.env.PORT||80;

// configration
// can define something, e.g: app.configure('stage', 'prod', function(){ 
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.register(".html", require("jqtpl").express);    
    app.use(express.static(__dirname + '/public'));
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.errorHandler({ showStack: true, dumpExceptions: true }));
    app.use(app.router);
});

// routes
app.get('/', function(req, res){
    // set socket io
    var socket = io.listen(app); 
    socket.on("connection", function(client) { 
        client.on("message", function(msg) {
        	console.info("message : " + msg);
    	 });  
    	client.on("disconnect", function() {
    		consoe.info("disconnected..");
    	 });  
    });    
    
    // render index page
    res.render('index', {
        title: 'Home',
        port: port,
        host: 'facomok.seank.c9.io',
    });
});

console.log('run');
app.listen(port);

/*
 var http = require("http"), 
    io = require("./node_modules/socket.io"),       
    server = http.createServer(function(req, res) {});   

server.listen(8000, null); 

var socket = io.listen(server); 
socket.on("connection", function(client) { 
    client.on("message", function(msg) {
		console.info("message : " + msg);
	 });  
	client.on("disconnect", function() {
		consoe.info("disconnected..");
	 });  
});

console.log('Server running at http://127.0.0.1:8000/');
*/

/*
app.configure('development', function(){                                            
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    var oneYear = 31557600000;
    app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
    app.use(express.errorHandler());
});
*/

/*
var express = require('express')
    ,stylus = require('stylus');
var app = module.exports = express.createServer();
var port = process.env.PORT||80;

// Configuration
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(stylus.middleware({ src: __dirname + '/public' }));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
    app.use(express.errorHandler()); 
});

// Routes
app.get('/', function(req, res){
    res.render('index', {
        title: 'Home'
    });
});

app.get('/about', function(req, res){
    res.render('about', {
        title: 'About'
    });
});

app.get('/contact', function(req, res){
    res.render('contact', {
        title: 'Contact'
    });
});

// Only listen on $ node app.js
if (!module.parent) {
    app.listen(port);
    console.log("Express server listening on port %d", app.address().port);
}
*/