//使用者
var user = "高森";

//申込履歴要素抽出
var el = document.querySelectorAll("table td,th,p");
var kaijou = el[2].outerText.trim();
var nichiji = el[4].outerText.replace(/\n|　/g,"");
var maisuu = el[10].outerText.replace(/\n| /g,"");
var meado = el[20].outerText.replace(/\n/g,"");
var denwa = el[48].outerText.replace(/\n/g,"");
var uketori = el[23].outerText.replace(/\n/g,"");
var shiharai = el[28].outerText.replace(/\n/g,"");
var shimei = el[31].outerText.replace(/\n/g,"");
var shimei_kana = el[33].outerText.replace(/\n/g,"");
var birthday = el[35].outerText.replace(/\n/g,"");
var address = el[39].outerText.replace(/\n/g,"");
var pass = el[40].outerText.replace(/\n/g,"");

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
log = [kaijou,nichiji,maisuu,meado,,denwa,uketori,shiharai,shimei,shimei_kana,birthday,address,pass,date,ip,user,'\n'];

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
