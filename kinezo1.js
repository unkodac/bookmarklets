var el = document.querySelectorAll("p");
var i = 0;
var offset = 0;
while(i<1000){
  var html = el[i].outerHTML;
  if(html.includes('type=event')){
    offset++;
  }
  if(offset==2){
    var pass = html.match(/shinjuku_wald9(.*)type=event/);
    document.location.href = pass[0];
    break;
  }
  i++;
}
