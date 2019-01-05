The Code include two files:
1. Assignment_server.js (The NodeJS server)
2. compute_input.py (Python Script)

Assignment_server.js:
A. At the begining the server create a get request with the signature :/number/num
It's mean that if you run on your browser - for example : http://localhost:8080/number/30 (any number you want),
you get at the page the line "number:30"
B. The Server split the url from the user and looking if the method is "Get". 
If it's true, the server print the right result and after that made the same with python script.
C. Python Script: First, initialize all our variables. ‘py’ is our spawned python process, which starts the script compute_input.py.
Second, define what we want to happen once we get data back from the python process:
(we are saying that every time our node application receives data from the python process output stream(on 'data'),
we want to convert that received data into a string and append it to the overall dataString
Once the stream is done (on 'end') we want to simply log the received data to the console). 
Finally, dump our data on to the python process.

D. After that, the server create post request which get an array.
When the user click "send" the server sorts the array and return it.
E. Function collectRequestData - Populating the fields and hitting ‘Save’ will submit the results to the root path containing the data fields as expected.
This will use the default media type application/x-www-form-urlencoded.
That means that it will create a query string using the field names as keys and its data as the values.
For ease of accessing each key/value pair we will use Node’s inbuilt querystring module to convert the data to an object. 
F. The server made the same with python script on the same way in paragraph C.

compute_input.py:
A. Get our data as an array from read_in()
B. Create a numpy array
C. Use numpys sort method to sort of all elements in the array
D. Return the sort to the output stream
