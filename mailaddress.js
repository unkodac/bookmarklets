var sei = array_sei[Math.floor(Math.random()*array_sei.length)];
var mei = array_mei[Math.floor(Math.random()*array_mei.length)];
var birth_y = (Math.floor(Math.random()*15)+1985);
var birth_m = (Math.floor(Math.random()*12)+1);
if(birth_m < 10){
  birth_m = "0" + birth_m;
}
var birth_d = (Math.floor(Math.random()*28)+1);
var day = (Math.floor(Math.random()*28)+1);
if(birth_d < 10){
  birth_d = "0" + birth_d;
}
var random = (Math.floor(Math.random()*9000)+1000);
var mode = Math.floor(Math.random()*8)
switch (mode) {
  case 1:
      var email = mei + birth_y + birth_m + birth_d;
  case 2:
      var email = sei + birth_y + birth_m + birth_d;
  break;
  case 3:
      var email = mei + birth_m + birth_d;
  break;
  case 4:
      var email = sei + birth_m + birth_d;
  break;
  case 5:
      var email = sei + mei + random;
  break;
  case 6:
      var email = "{$romajiMei}{$romajiSei}{$random}@{$domain}";
  break;
  case 7:
      var email = "{$romajiSei}{$romajiMei}{$month}{$day}@{$domain}";
  break;
  case 8:
      var email = "{$romajiMei}{$romajiSei}{$month}{$day}@{$domain}";
  break;
  default:
      var email = random(mt_rand(6, 10)) . "@{$domain}";
  break;
}
return email;
