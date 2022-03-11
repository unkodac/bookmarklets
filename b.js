
var array_sei = ['a','b','c','d','e','f'];
//var array_mei = ['a','b','c','d','e','f'];
//var array_sei_kana = ['a','b','c','d','e','f'];
//var array_mei_kana = ['a','b','c','d','e','f'];

const sei_pic = Math.floor(Math.random()*Math.floor(2));
const mei_pic = Math.floor(Math.random()*Math.floor(2));

var sei = array_sei[sei_pic];
var mei = array_mei[mei_pic];
var sei_kana = array_sei_kana[sei_pic];
var mei_kana = array_mei_kana[mei_pic];

document.forms.ttg100.elements.PWD.value = document.forms.ttg100.elements.PWD_CNF.value = Math.random().toString(36).slice(-4);
document.forms.ttg100.elements.APLCT_FIRST_NAME.value = sei;
document.forms.ttg100.elements.APLCT_LAST_NAME.value = mei;
document.forms.ttg100.elements.APLCT_FIRST_NAME_KANA.value = sei_kana;
document.forms.ttg100.elements.APLCT_LAST_NAME_KANA.value = mei_kana;
