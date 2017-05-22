//console.log("Welcome to NodeJS")
/*var http=require("http");
http.createServer(function(request,response){
	response.writeHead(200,{'content-type':'text'});
	response.end("Hello.......");
}).listen(4000)*/

var http=require("http");
var server=http.createServer(function(request,response){
	response.writeHead(200,{'content-type':'text'});
	response.end("Hello.......");
})
server.listen(4000,function(){
	console.log("Server is listening at 4000")
})