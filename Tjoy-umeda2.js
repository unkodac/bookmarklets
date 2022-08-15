var el = document.querySelectorAll("p");
var i = 0;
var array = [];
while(i<100){
  var a = el[i].outerHTML;
  array.push(a);
  i++;
}
