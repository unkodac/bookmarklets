var data = ['@pikahika_tapi','神戸春子','大高明日風','女','28','101-0065','東京都千代田区西神田4-14-8','okoube@qrnail.com','080-8237-2142'];
var sheet = document.getElementById("c_q1").value - 2;
var post = data[(sheet*9) + 5].split("-");
var tel = data[(sheet*9) + 8].split("-");
document.getElementById("c_q34").value = data[sheet*9];
document.getElementById("c_q1").value = data[(sheet*9) + 1];
document.getElementById("c_q25").value = data[(sheet*9) + 2];
if(data[(sheet*9) + 3] == "男"){
  document.getElementById("c_q2_0").checked = true;
}else{
  document.getElementById("c_q2_1").checked = true;
}
document.getElementById("c_q3").value = data[(sheet*9) + 4];
document.getElementById("c_q20_left").value = post[0];
document.getElementById("c_q20_right").value = post[1];
document.getElementById("c_q6").value = data[(sheet*9) + 6];
document.getElementById("c_q31").value = data[(sheet*9) + 7];
document.getElementById("c_q33_areacode").value = tel[0];
document.getElementById("c_q33_citycode").value = tel[1];
document.getElementById("c_q33_subscribercode").value = tel[2];
