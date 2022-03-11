//ローチケ名義入力画面自動化[共用]

var array_sei = ['\u4f50\u85e4','\u9234\u6728','\u9ad8\u6a4b','\u7530\u4e2d','\u4f0a\u85e4','\u6e21\u8fba','\u5c71\u672c','\u4e2d\u6751','\u5c0f\u6797','\u52a0\u85e4','\u5409\u7530','\u5c71\u7530'];//性(漢字)リスト
var array_mei = ['\u685c','\u7f8e\u54b2','\u51db','\u6625\u83dc','\u4e03\u6d77','\u7f8e\u4e45','\u82b1\u97f3','\u552f','\u767e\u82b1','\u65e5\u5411']; //名(漢字)リスト
var array_sei_kana = ['\u30b5\u30c8\u30a6','\u30b9\u30ba\u30ad','\u30bf\u30ab\u30cf\u30b7','\u30bf\u30ca\u30ab','\u30a4\u30c8\u30a6','\u30ef\u30bf\u30ca\u30d9','\u30e4\u30de\u30e2\u30c8','\u30ca\u30ab\u30e0\u30e9','\u30b3\u30d0\u30e4\u30b7','\u30ab\u30c8\u30a6','\u30e8\u30b7\u30c0','\u30e4\u30de\u30c0']; //性(カナ)リスト
var array_mei_kana = ['\u30b5\u30af\u30e9','\u30df\u30b5\u30ad','\u30ea\u30f3','\u30cf\u30eb\u30ca','\u30ca\u30ca\u30df','\u30df\u30af','\u30ab\u30ce\u30f3','\u30e6\u30a4','\u30e2\u30e2\u30ab','\u30d2\u30ca\u30bf']; //名(カナ)リスト

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

document.querySelector("[name=NEXT_BUTTON]").click();　//次画面へ
