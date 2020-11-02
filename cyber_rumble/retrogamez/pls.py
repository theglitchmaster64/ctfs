import glob
from urllib.parse import unquote

files = open('file_list.txt','r').read()

files = files.split('\n')
del files[-1]

file_list = []

ordered_list = []

for file in files:
    file_list.append(unquote(open(file,'r').read()))

for item in file_list:
    ordered_list.append((int(item.split('&')[0].split('=')[1]),item.split('&')[2].split('=')[1]))

ordered_list = sorted(ordered_list,key=lambda x:x[0])

print(len(ordered_list))

stitched = open('stitched','a')

for x in ordered_list:
    stitched.write(x[1])

stitched.close()
