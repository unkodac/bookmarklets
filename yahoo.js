var el1 = document.querySelectorAll("span");
var mailList = el1[11].outerText + "\n";
var el2 = document.querySelectorAll("option");
var i = 1;
while (i <= 10){
  mailList = mailList + el2[i].outerText + "\n";
  i++;
}
/*var text_name = account + '.txt';var blob = new Blob([mailList],{type:"text/plan"});
var link = document.createElement('a');link.href = URL.createObjectURL(blob);
link.download = text_name;link.click();*/
function copyToClipBoard(){
  var anyText= mailList;
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
