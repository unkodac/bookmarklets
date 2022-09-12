var el = document.querySelectorAll("p");

function replaceFullToHalf(str){
  return str.replace(/[！-～]/g, function(s){
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
}

var num_txt = el[1].outerText;
var num = num_txt.match(/[0-9]{8}/g)[0];

var nyuukaibi = el[2].outerText;

var oshi = el[4].outerText;

var name_txt = el[5].outerText;
var n = name_txt.split(' ');
var name = n.join('');

var post_txt = el[6].outerText;
var post1 = post_txt.slice(0,3);
var post2 = post_txt.slice(-4);
var post = post1 + "-" + post2;

var pref = el[7].outerText;
var street = el[8].outerText;
var address = pref + replaceFullToHalf(street);

var tel_txt = el[9].outerText;
var t = tel_txt.split('-');
var tel = t.join('').trim();

var birthday = el[10].outerText;

var log = [num,,,name,,post,address,birthday,tel,oshi,nyuukaibi,'\n'];
var text_name = num + '.txt';
var blob = new Blob([log],{type:"text/plan"});
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = text_name;link.click();
