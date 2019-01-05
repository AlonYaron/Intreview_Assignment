const http = require('http');
const { parse } = require('querystring');


var count = '0'; 

const server = http.createServer((req, res) => {
	//Assignment 1.1
	res.writeHead(200, {'Content-Type': 'text/html'});
	var url_array = req.url.split('/');
	var number = url_array[url_array.length-2];
	var num = url_array[url_array.length-1];
	
    if (req.method === 'POST') {
        collectRequestData(req, result => {
			//Assignment 1.2 
			var array = JSON.parse("[" + result.fname + "]");
			array = array.sort(function(a,b){return a-b});
			res.end(`array: ${array}`);
			
			//Assignment 2 
			var spawn = require('child_process').spawn,
			py = spawn('python', ['compute_input.py']),
			data = array,
			dataString = '';

			py.stdout.on('data', function(data){
			dataString += data.toString();
			});
			
			py.stdout.on('end', function(){
			console.log('Sort array=',dataString);
			});
			
			py.stdin.write(JSON.stringify(data));
			py.stdin.end();
		            
        });
    }	
    else {
		//Assignment 1.1 
		if (num !== '') { 
			res.write(number+':' + num);
			
			//Assignment 2 
			if(count == '0')
			{
				var spawn = require('child_process').spawn,
				py = spawn('python', ['compute_input.py']),
				data = [num],
				dataNum = '';
			
				//print the sort array
				py.stdout.on('data', function(data){
				dataNum += data.toString();
				});
			
				py.stdout.on('end', function(){
				console.log('number:',dataNum);
				});
			
				py.stdin.write(JSON.stringify(data));
				py.stdin.end();
				
				count = 1;
			}
			
		}
		//Assignment 1.2 
        res.end(`
            <!doctype html>
            <html>
            <body>
                <form action="/" method="post">
                    array:<input type="text" name="fname" /><br />
                    <button>Save</button>
                </form>
            </body>
            </html>
        `);
    }
});
server.listen(3000);

//Assignment 1.2 
function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded'; 
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}


