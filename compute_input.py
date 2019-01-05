## compute_input.py

import sys, json, numpy as np

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])
	
def main():
    #get our data as an array from read_in()
    lines = read_in()

    #create a numpy array
    np_lines = np.array(lines)

    #use numpys sort method to sort of all elements in the array
    lines_sort = np.sort(np_lines)

    #return the sort to the output stream
    print lines_sort

#start process
if __name__ == '__main__':
    main()