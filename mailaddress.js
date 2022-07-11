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
$mode = mt_rand(1, 8);
switch ($mode) {
    case 1:
        $email = "{$romajiMei}{$year}{$month}{$day}@{$domain}";
    break;
    case 2:
        $email = "{$romajiSei}{$year}{$month}{$day}@{$domain}";
    break;
    case 3:
        $email = "{$romajiMei}{$month}{$day}@{$domain}";
    break;
    case 4:
        $email = "{$romajiSei}{$month}{$day}@{$domain}";
    break;
    case 5:
        $email = "{$romajiSei}{$romajiMei}{$random}@{$domain}";
    break;
    case 6:
        $email = "{$romajiMei}{$romajiSei}{$random}@{$domain}";
    break;
    case 7:
        $email = "{$romajiSei}{$romajiMei}{$month}{$day}@{$domain}";
    break;
    case 8:
        $email = "{$romajiMei}{$romajiSei}{$month}{$day}@{$domain}";
    break;
    default:
        $email = random(mt_rand(6, 10)) . "@{$domain}";
    break;
}
return $email;
