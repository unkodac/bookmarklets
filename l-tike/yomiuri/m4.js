//使用者
var user = "高森";


//ログ本体生成
var log = user;
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
