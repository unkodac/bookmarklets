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

/*//IPアドレス取得
async function getip(){
    var API_URL = 'https://api.ipify.org/?format=json';
    var res = await fetch(API_URL);
    var data = await res.json();
    ip = data.ip;
    return ip;
}
getip();
*/
//日時取得
var getdate = new Date();
var year = String(getdate.getFullYear());
if((getdate.getMonth() + 1) < 10){
    var month = "0" + String(getdate.getMonth() + 1);
}else{
    var month = String(getdate.getMonth() + 1);
}
if(getdate.getDate() < 10){
    var day = "0" + String(getdate.getDate());
}else{
    var day = String(getdate.getDate());
}
if(getdate.getHours() < 10){
    var hours = "0" + String(getdate.getHours());
}else{
    var hours = String(getdate.getHours());
}
if(getdate.getMinutes() < 10){
    var minutes = "0" + String(getdate.getMinutes());
}else{
    var minutes = String(getdate.getMinutes());
}
if(getdate.getSeconds() < 10){
    var seconds = "0" + String(getdate.getSeconds());
}else{
    var seconds = String(getdate.getSeconds());
}

var date = year + "年" + month + "月" + day + "日" + hours + "時" + minutes + "分" + seconds + "秒";

//ログ本体生成
setTimeout(function(){
var log = kaijou + '\t' + nichiji + '\t' + maisuu + '\t' + meado + '\t\t' + denwa + '\t' + uketori + '\t' + shiharai + '\t' + shimei + '\t' + shimei_kana + '\t' + birthday + '\t' + address + '\t' + pass + '\t' + date + '\t' + '\t' + user;

//ログをtxtファイルに保存
var logs = prompt("テキストをシートにコピペしてください。",log);
//logs.select();
/*var text_name = year + month + day + hours + minutes + seconds + meado + '.txt';
var blob = new Blob([log],{type:"text/plan"});
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = text_name;link.click();*/

//次画面へ
document.querySelector("[name=ENTRY_FIX]").click();
},1500);
