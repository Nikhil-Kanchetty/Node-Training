
var httpmod = require('http');
console.log('IN');
httpmod.createServer(function(request,response){
	response.writeHead(200,{'content-type':'text/plain'});
	response.end('node server is working');	
}).listen(1234);

console.log('server is running at http://127.0.0.1:1234');