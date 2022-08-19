/*テストモード*/
var testmode = true;
/*開催劇場
var theater = 't-joy_kyoto';*/
/*公演名キーワード*/
var keyword = 'ツルネ';
/*購入回*/
var time = 2;

if(testmode){
  var type = 'type=film';
}else{
  var type = 'type=event';
}

var el = document.querySelectorAll("h5,p");
el = Array.from(el);
var title = false;
var i = 0;
var offset = 0;
while(title == false){
  var text = el[0].outerText;
  if(text.includes(keyword)){
    title = true;
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
    var pass = html.match(reg);
    document.location.href = pass[0];
    break;
  }
}

