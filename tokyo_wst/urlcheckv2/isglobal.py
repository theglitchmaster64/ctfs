#!/usr/bin/python3

import sys
import ipaddress

try:
	print(sys.argv[1],ipaddress.ip_address(sys.argv[1]).is_global)
except ValueError:
	pass
