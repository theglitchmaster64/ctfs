var fs = require('fs');
var CryptoJS = require("crypto-js");
var moment = require("moment");

var realm_salt = CryptoJS.enc.Hex.parse('922b9f9aa2230fd73ee65de42baef9b9');
var realm_iv = CryptoJS.enc.Hex.parse('42f7d6639dc640084a6e50ddad82cd2d');
var message = ''

var message = fs.readFile('stitched',function(err, data) {
    message = data.toString().substr(64);
    return message;
  });


function check_decrypt(pass){
  realm_key = CryptoJS.PBKDF2(pass, realm_salt,{keySize: 256 / 32,iterations: 100});
try{
  mydata = CryptoJS.AES.decrypt(message,realm_key,{iv:realm_iv,padding: CryptoJS.pad.Pkcs7,mode:CryptoJS.mode.CBC}).toString(CryptoJS.enc.Utf8);
  if (mydata.substr(0,4)=='data'){
    console.log(mydata);
  }
}
catch(e){
}
}


function brute(){
  ret_arr = [];
	var string = "+?=_:#@";
	var cnt = 0;
	for (var i = 0;i<7;i++){
		for (var j = 0;j<7;j++){
			for (var k = 0;k<7;k++){
				for (var l = 0;l<7;l++){
					test= string.charAt(i)+string.charAt(j)+string.charAt(k)+string.charAt(l);
					ret_arr.push(test)
				}
			}
		}
	}
  return ret_arr;
}

function make_pass(x,n){
  var realm_pass = 'Lin'+x+n.toString()
  var hashx = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(realm_pass));
  return (hashx.toString(CryptoJS.enc.Hex));
}

console.log(message);
