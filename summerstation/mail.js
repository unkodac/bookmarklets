//使用ドメイン入力
var domains = ['@qrnail.com'];

//メアド生成
var ketasuu = Math.floor(Math.random()*6);
var mail = Math.random().toString(36).slice(-1*(ketasuu+5)) + domains;

//データ入力
document.getElementsByName("mailaddress")[0].value = mail;
document.querySelector("[name=agree]").click();

//次画面へ
document.querySelector("[id=submit_btn]").click();　
