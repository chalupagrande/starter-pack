# importing the requests library
import requests
import json
import time
path = LOG.txt
URL = "http://ed7d04bd.ngrok.io/api/test"
location = "delhi technological university"
PARAMS = {'address':location}

while True:
  time.sleep(10)
  log_file = open(path, 'w')
  # extracting data in json format
  try:
    print(time.asctime())
    r = requests.post(url = URL, params = PARAMS)
    data = r.json()
    print(data)
    string_to_write = time.asctime() + data
    log_file.write(string_to_write)

  except:
    print('oops')
    log_file.write("Failure")
  log_file.close()