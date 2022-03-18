var log = 'unko';
var text_name = 'a'+'.txt';
var blob = new Blob([log],{type:"text/plan"});
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = text_name;link.click();
document.querySelector("[name=RSRV_CNF]").click();
