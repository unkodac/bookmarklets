var el = document.querySelectorAll("p");
var i = 0;
while(i<100){
  var html = el[i].outerHTML;
  if(html.includes('C3011')){
    var pass = html.match(/location.href ='(.*)'" class=/);
    console.log(html);
    break;
  }
  i++;
}
