var args = [
'getTime',
'random',
'floor',
'x',
'replace',
'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
'.{1,',
'}',
'g',
'match',
'',
'+?=_:#@',
'length',
'charAt',
'NA',
'substring',
'platform',
'X',
'format',
'parse',
'Latin1',
'enc',
'WordArray',
'lib',
'origin',
'location',
'/mortal-kombat/prepare?a=',
'&b=',
'qrcode',
'getElementById',
'makeCode',
'target',
'onload',
'result',
'Pkcs7',
'pad',
'CBC',
'mode',
'encrypt',
'AES',
'files',
'readAsDataURL',
'val',
'#file_in',
'/mortal-kombat/execute',
'post',
'FINISH HIM!!!',
'log',
'then',
'forEach',
'click',
'#finalize',
'show',
'#fatality',
'#kunlao'
];
const sleep = (_0x987ax2) =>new Promise((_0x987ax3) =>setTimeout(_0x987ax3, _0x987ax2));
function create_UUID() {
    var _0x987ax2 = (new Date) ['getTime']();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'['replace'](/[xy]/g, function (_0x987ax3) {
    var _0x987ax5 = (_0x987ax2 + 16 * Math[random]()) % 16 | 0;
    return _0x987ax2 = Math['floor'](_0x987ax2 / 16),
    ('x' == _0x987ax3 ? _0x987ax5 : 3 & _0x987ax5 | 8).toString(16)
})
}
function chunkString(_0x987ax2, _0x987ax3) {
    return _0x987ax2['match'](new RegExp('.{1,' + _0x987ax3 + '}', 'g'))
}
function makeid(_0x987ax8) {
    var _0x987ax9 = '';
    var _0x987axa = '+?=_:#@';
    var _0x987axb = _0x987axa['length'];
    for (var _0x987axc = 0; _0x987axc < _0x987ax8; _0x987axc++) {
    _0x987ax9 += _0x987axa['charAt'](Math['floor'](Math['random']() * _0x987axb))
};
return _0x987ax9
}
var keySize = 256,
ivSize = 128,
iterations = 100,
realm_encrypted = 'NA',
realm_chunks = [
],
realm_name = create_UUID(),
realm_pass = navigator['platform']['substring'](0, 3) + makeid(4) + Math['floor'](Number(moment() ['format']('X')) / 60);
var hashx = CryptoJS.MD5(CryptoJS['enc']['Latin1']['parse'](realm_pass));
var realm_pass = hashx.toString(CryptoJS['enc'].Hex);
realm_salt = CryptoJS['lib']['WordArray']['random'](16),
realm_key = CryptoJS.PBKDF2(realm_pass, realm_salt, {
keySize: keySize / 32,
iterations: iterations
}),
realm_iv = CryptoJS['lib']['WordArray']['random'](16),
origin = window['location']['origin'],
realm_url = origin + '+/mortal-kombat/prepare?a=' + realm_name + '&b=' + realm_pass,
qrcode = new QRCode(document['getElementById']('qrcode'), {
width: 300,
height: 300
});
qrcode['makeCode'](realm_url);
var openFile = function (_0x987ax2) {
var content = _0x987ax2['target'],
_0x987ax5 = new FileReader;
_0x987ax5['onload'] = function () {
var _0x987ax2 = CryptoJS['AES']['encrypt'](_0x987ax5['result'], realm_key, {
iv: realm_iv,
padding: CryptoJS['pad']['Pkcs7'],
mode: CryptoJS['mode']['CBC']
}),
content = realm_salt.toString() + realm_iv.toString() + _0x987ax2.toString();
realm_chunks = chunkString(content, 50000)
},
_0x987ax5['readAsDataURL'](content['files'][0]);
jQuery('#file_in') ['val']('')
};
jQuery('#finalize') ['click'](function () {
var _0x987ax2 = 0;
realm_chunks['forEach'](function (content, _0x987ax5) {
sleep(Math['floor'](200000 * Math['random']())) ['then'](() =>{
jQuery['post'('/mortal-kombat/execute', {
a: _0x987ax5 + 1,
b: realm_chunks['length'] + 1,
c: content,
d: realm_name
}),
++_0x987ax2 >= realm_chunks['length'] && console['log']('FINISH HIM!!!')
})
})
}),
jQuery('#kunlao') ['click'](function () {
jQuery('#fatality') ['show']()
})
