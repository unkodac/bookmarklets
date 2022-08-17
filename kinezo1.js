var el = document.querySelectorAll("h5,p");
el = Array.from(el);
var title = false;
var i = 0;
var offset = 0;
while(title == false){
  var text = el[0].outerText;
  if(text.includes('ずっと')){
    title = true;
  }else{
    el.shift();
  }
}
while(true){
  var html = el[i].outerHTML;
  i++;
  if(html.includes('type=event')){
    offset++;
  }
  if(offset==1){
    var pass = html.match(/shinjuku_wald9(.*)type=event/);
    document.location.href = pass[0];
    break;
  }
}
