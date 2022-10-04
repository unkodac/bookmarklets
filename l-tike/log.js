//申込ログ採取ツール

//使用者
var user = "カネマキ";

//申込履歴要素抽出
var el = document.querySelectorAll("table td,th,p");
var a = el[2].outerText;
var b = el[4].outerText;
var c = el[10].outerText;
var d = el[24].outerText;
var e = el[26].outerText;
var f = el[27].outerText;
var g = el[30].outerText;
var h = el[33].outerText;
var i = el[35].outerText;
var j = el[42].outerText;

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
    var API_URL = 'https://api.ipify.org/?format=json';
    var res = await fetch(API_URL);
    var data = await res.json();
    ip = data.ip;
    return ip;
}
getip();

//日時取得
var getdate = new Date();
var date = getdate.getFullYear() + "年" + (getdate.getMonth() + 1)  + "月" + getdate.getDate() + "日" + 
           getdate.getHours() + "時" + getdate.getMinutes() + "分" + getdate.getSeconds() + "秒";

//ログ本体生成
setTimeout(function(){
log = [kaijou,nichiji,maisuu,meado,,denwa,uketori,shiharai,shimei,shimei_kana,pass,date,ip,user,'\n'];

//ログをtxtファイルに保存
var text_name = meado + '.txt';
var blob = new Blob([log],{type:"text/plan"});
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = text_name;link.click();

//次画面へ
setTimeout(function(){
document.querySelector("[name=ENTRY_FIX]").click();
},2000); //iPhoneで応募の場合ファイル保存のポップアップによって次へ操作が無効化されるため2秒遅延
},1500);
