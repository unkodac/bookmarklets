//ローチケ名義入力画面自動化[共用]

var array_sei = ['a','b','c','d','e','f']; //性(漢字)リスト
var array_mei = ['a','b','c','d','e','f']; //名(漢字)リスト
var array_sei_kana = ['a','b','c','d','e','f']; //性(カナ)リスト
var array_mei_kana = ['a','b','c','d','e','f']; //名(カナ)リスト

const sei_len = array_sei.length;
const mei_len = array_mei.length;

const sei_pic = Math.floor(Math.random()*Math.floor(sei_len));
const mei_pic = Math.floor(Math.random()*Math.floor(mei_len));

var sei = array_sei[sei_pic];
var mei = array_mei[mei_pic];
var sei_kana = array_sei_kana[sei_pic];
var mei_kana = array_mei_kana[mei_pic];


document.forms.ttg100.elements.PWD.value = document.forms.ttg100.elements.PWD_CNF.value = Math.random().toString(36).slice(-4); //4桁パスワード生成

document.forms.ttg100.elements.APLCT_FIRST_NAME.value = sei; //名前入力
document.forms.ttg100.elements.APLCT_LAST_NAME.value = mei;
document.forms.ttg100.elements.APLCT_FIRST_NAME_KANA.value = sei_kana;
document.forms.ttg100.elements.APLCT_LAST_NAME_KANA.value = mei_kana;

document.querySelector("[name=NEXT]").click();　//次画面へ
