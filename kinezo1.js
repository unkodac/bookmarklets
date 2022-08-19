/*テストモード*/
var testmode = true;
/*公演名キーワード*/
var keyword = 'ハウ';
/*購入回*/
var time = 1;

if(testmode){
  var type = 'type=film';
}else{
  var type = 'type=event';
}

var el = document.querySelectorAll("h5,p");
el = Array.from(el);
var i = 0;
var offset = 0;
while(true){
  var text = el[0].outerText;
  if(text.includes(keyword)){
    break;
  }else{
    el.shift();
  }
}
while(true){
  var html = el[i].outerHTML;
  i++;
  if(html.includes(type)){
    offset++;
  }
  if(offset == time){
    reg = new RegExp(location.pathname + '(.*)' + type);
    var path = html.match(reg);
    break;
  }
}
document.location.href = path[0];
