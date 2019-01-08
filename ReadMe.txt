The Code include two files:
1. node_server.js (The NodeJS server)
2. python_client.py (Python Script)

node_server.js:
The server has 2 rest APIs.
A. GET request with that gets request from the python script with the structure http://localhost:8080/number/num,
where num is a number,
The response of this API is a JSON object with the format:
{
	number:num
}
B. POST request which get a JSON object from the python script with array of numbers
and then sorts the array elements and return JSON object with the sorted array in this format:
{
	array:[X,X,...,X]
}

python_client:
A. Get number and array from the user
B. return JSON object with the number and JSON object with the sorted array
