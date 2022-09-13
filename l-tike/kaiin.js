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
document.querySelector("[name=send]").click();
