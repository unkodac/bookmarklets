//使用ドメイン入力
var domains = ['@qrnail.com'];

//メアド生成
var domain = domains[Math.floor(Math.random()*domains.length)];
var mail = Math.random().toString(36).slice(-1*(Math.floor(Math.random()*6) + 5)) + domain;

//パスワード生成
var pass = Math.random().toString(36).slice(-8);

//データ入力
document.getElementById("email").value = mail;
document.getElementById("password").value = pass;
document.getElementById("repassword").value = pass;
const changeEvent = new Event('change');
document.getElementById("ckb").checked = true;
document.getElementById("ckb").dispatchEvent(changeEvent);

//ログ本体生成
log = [mail,pass,'\n'];

//ログをtxtファイルに保存
var text_name = mail + '.txt';
var blob = new Blob([log],{type:"text/plan"});
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = text_name;
link.click();

//次画面へ
document.querySelector("[name=send]").click();
