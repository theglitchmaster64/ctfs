#!/usr/bin/python3

import requests

headers = {'location':'127.0.0.1/admin-status'}

print(requests.get('http://127.0.0.1/check-status').text)
