import requests
import json
num = raw_input("Please write your number  ")
array = raw_input("Please write your array with comma separate between elements  ")
r = requests.get('http://localhost:8080/number/'+num);
parsed = json.loads(r.text)
print(json.dumps(parsed,indent=4, sort_keys=True))
payload = array
req = requests.post('http://localhost:8080',data=payload)
parsed_req = json.loads(req.text)
print(json.dumps(parsed_req,indent=4, sort_keys=True))



