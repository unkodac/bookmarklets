//使用者
var user = "高森";

//申込履歴要素抽出
var el = document.querySelectorAll("table td,th,p");
var kaijou = el[2].outerText.trim();

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
var log = kaijou + '\t' + date + '\t\t' + user;
function copyToClipBoard(){
  var anyText= log;
  var textBox = document.createElement("textarea");
  textBox.setAttribute("id", "target");
  textBox.setAttribute("type", "hidden");
  textBox.textContent = anyText;
  document.body.appendChild(textBox);
  textBox.select();
  document.execCommand('copy');  
  document.body.removeChild(textBox);
}
copyToClipBoard();
