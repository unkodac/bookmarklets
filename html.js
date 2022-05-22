var array = document.querySelectorAll("span");
var artist = [];
for( var i=0 ; i < array.length; i++){
    var a = array[i].outerHTML;
    artist.push(a);
}
