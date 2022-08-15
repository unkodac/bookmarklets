var el = document.querySelectorAll("p");
var i = 0;
var ofset = 0;
while(i<1000){
  var html = el[i].outerHTML;
  if(html.includes('C3011')){
    ofset++;
  }
  if(ofset==2){
    var pass = html.match(/shinjuku_wald9(.*)type=film/);
    document.location.href = pass[0];
    break;
  }
  i++;
}
