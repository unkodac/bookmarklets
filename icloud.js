var ketasuu= 8;
var pass = Math.random().toString(36).slice(-1*(ketasuu)) + "@qrnail.com";
document.getElementById("forwardEmailAddressField").value = pass;
