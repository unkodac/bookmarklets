//開催劇場
var theater = /t-joy_kyoto(.*)type=event/
//公演名キーワード
var keyword = 'ツルネ';
//購入回
var time = 2;

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
  if(html.includes('type=event')){
    offset++;
  }
  if(offset == time){
    var pass = html.match(thater);
    document.location.href = pass[0];
    break;
  }
}
