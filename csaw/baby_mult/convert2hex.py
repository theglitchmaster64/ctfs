#!/usr/bin/python3

if __name__=='__main__':
	a = open('program.txt.list').read().split('\n')
	a.pop()
	#for i in a:
		#print(hex(int(i)))
	
	binfile = open('./bindump','wb+')
	
	print(a)

	for x in a:
		#binfile.write(bytes(hex(int(x))))
		print(bytes(int(x)))

	binfile.close()
