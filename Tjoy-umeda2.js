var el = document.querySelectorAll("p");
var i = 0;
while(i<1000){
  var html = el[i].outerHTML;
  if(html.includes('C3011')){
    var pass = html.match(/shinjuku_wald9(.*)type=film);
    document.location.href = pass[0];
    break;
  }
  i++;
}