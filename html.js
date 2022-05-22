var array = document.querySelectorAll("span");
var artist = [];
for( var i=0 ; i < array.length; i++){
    var a = array[i].outerHTML;
    artist.push(a);
}
var text_name = 'm.txt';
var blob = new Blob([artist],{type:"text/plan"});
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = text_name;link.click();
