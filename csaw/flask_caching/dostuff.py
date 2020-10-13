#!/usr/bin/python3

import requests
import sys
import socket

sock = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

if __name__ == '__main__':
	
	print('sending post request...')
	print(requests.post(sys.argv[1],data={'title':'test0'},files={'content':'AAAAAAAAAAAAAAAAAAAAAAAA'}).text)
	#print(requests.get(sys.argv[1]+'/test0').text)	
	print()

	print('retriving redis keys...')
	sock.connect(('127.0.0.1',6379))
	sock.send(b'keys * \r\n')
	keys=sock.recv(1024).decode()
	keys=keys.split('\n')
	keys.pop()
	for i in keys:
		x=('get '+i.strip('\r')+'\r\n')
		#print(bytes(x.encode()))
		sock.send(bytes(x.encode()))
		print('key: '+i.strip('\r'))
		value = sock.recv(1024)
		try:
			print(value.decode())
		except UnicodeDecodeError:
			print(value)
		print()
	print()

	print('sending get to /test...')
	print(requests.get(sys.argv[1]+'/test0').text)
	
