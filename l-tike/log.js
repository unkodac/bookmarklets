//申込ログ採取ツール[共用]

//使用者
var user = "共用";
//PCで使用するか
var pc = false;

//申込履歴要素抽出
var el = document.querySelectorAll("table td,th,p");
if (pc == true){
  var a = el[5].outerText;
  var b = el[6].outerText;
  var c = el[11].outerText;
}else{
  var a = el[2].outerText;
  var b = el[4].outerText;
  var c = el[10].outerText;
}
var d = el[14].outerText;
var e = el[16].outerText;
var f = el[17].outerText;
var g = el[20].outerText;
var h = el[23].outerText;
var i = el[25].outerText;
var j = el[26].outerText;

//改行を取り除く
var a_ = a.split('\n');
var b_ = b.split('\n');
var b__ = b_.join('');
var b___ = b__.split('　');
var c_ = c.split('\n');
var c__ = c_.join('');
var c___ = c__.split(' ');
var d_ = d.split('\n');
var e_ = e.split('\n');
var f_ = f.split('\n');
var g_ = g.split('\n');
var h_ = h.split('\n');
var i_ = i.split('\n');
var j_ = j.split('\n');

//分裂した要素を再結合
var kaijou = a_.join('');
var nichiji = b___.join('');
var maisuu = c___.join('');
var meado = d_.join('');
var denwa = e_.join('');
var uketori = f_.join('');
var shiharai = g_.join('');
var shimei = h_.join('');
var shimei_kana = i_.join('');
var pass = j_.join('');

//IPアドレス取得
async function getip(){
    const API_URL = 'https://api.ipify.org/?format=json';
    const res = await fetch(API_URL);
    const data = await res.json();
    ip = data.ip;
    return ip;
}
getip();

//日時取得
var day = new Date();
var date = day.getFullYear() + "年" + (day.getMonth() + 1)  + "月" + day.getDate() + "日" + 
           day.getHours() + "時" + day.getMinutes() + "分" + day.getSeconds() + "秒";

//ログ本体生成
log = [kaijou,nichiji,maisuu,meado,denwa,uketori,shiharai,shimei,shimei_kana,pass,date,ip,user,'\n'];

//ログをtxtファイルに保存
var text_name = meado + '.txt';
var blob = new Blob([log],{type:"text/plan"});
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = text_name;link.click();

//次画面へ
//setTimeout(function(){
//document.querySelector("[name=ENTRY_FIX]").click();
//},2000); //ファイル保存のポップアップによって次へ操作が無効化されるため2秒遅延
