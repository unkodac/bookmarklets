var array_sei = ['a','b','c','d','e','f'];
var array_mei = ['a','b','c','d','e','f'];
var array_sei_kana = ['a','b','c','d','e','f'];
var array_mei_kana = ['a','b','c','d','e','f'];
const sei_len = array_sei.length;
const mei_len = array_mei.length;
const sei_pic = Math.floor(Math.random()*Math.floor(6));
const mei_pic = Math.floor(Math.random()*Math.floor(6));
var sei = array_sei[sei_pic];
var mei = array_mei[mei_pic];
var sei_kana = array_sei_kana[sei_pic];
var mei_kana = array_mei_kana[mei_pic];
document.forms.ttg160.elements.MAIL_ADDRS.value = document.forms.ttg160.elements.MAIL_ADDRS_CONFIRM.value = sei;
document.forms.ttg160.elements.TEL.value = document.forms.ttg160.elements.TEL_CONFIRM.value = mei;

