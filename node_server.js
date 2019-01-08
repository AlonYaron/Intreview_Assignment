const http = require('http');

var qs = require('querystring');

http.createServer((request, response) => {
console.log("request was made");	
const { headers, method, url, body } = request;
if (request.method === 'GET'){
	var url_array = request.url.split('/');
	var number = url_array[url_array.length-2];
	var num = url_array[url_array.length-1];
	let body = [];
    request.on('data', (chunk) => {
     body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
	});
	response.writeHead(200, {'Content-Type': 'application/json'});
	const responseBody = { number: num };
	response.write(JSON.stringify(responseBody));
	response.end();	  
} else{
	let body = '';

    request.on('data', (chunk) => {
     body+=chunk;
    }).on('end', () => {
      body = qs.unescape(body);
	  var array = JSON.parse("[" + body + "]");
	  array.sort(function(a,b){return a-b});
	  result = {'array':array};
	  response.end(JSON.stringify(result));

	});
	

}
}).listen(8080);
	