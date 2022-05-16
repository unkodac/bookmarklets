//性別選択
sex_len = Math.floor(Math.random()*2);
if(sex_len == 0){
  var sex = "男性";
}else{
  var sex = "女性";
}

//年代選択
age_len = Math.floor(Math.random()*3);
if(age_len == 0){
  var age = "20代";
}else if(age_len == 1){
  var age = "30代";
}else{
  var age = "40代";
}

//質問1
artist_array = ['461\u30e2\u30f3\u30d6\u30e9\u30f3', 'AIKO', 'Aly', 'Cheesa', 'Hirotausu', 'KAORI', 'KAORI&Cheesa', 'KenKen', 'Minako', 'OKU', 'Quatuor AVENA', 'R1SA', 'Salia', 'SAYOKO', 'SAYUMI', 'sotaro', 'STICK+', 'YOUJI', 'YuyaTomoi', '\u30aa\u30ab\u30c0\u30c8\u30e2\u30e4', '\u30ab\u30a6\u30dc\u30fc\u30a4\u67d3\u7530\u5c4b', '\u3058\u3093\u306e\u3086\u3046\u3053', '\u3084\u306a\u3081', '\u30ea\u30a8\u30eb', '\u4e0a\u5e73\u7530 \u4e9c\u5915', '\u4e0a\u7530 \u5320', '\u4e0b\u5185 \u611b\u5b50', '\u4e2d\u5c3e \u5065\u592a', '\u4e2d\u5cf6 \u5eb7\u96c5', '\u4e38\u5c71 \u831c\u8449', '\u4e95\u91ce \u30a2\u30ad\u30f2', '\u4ec1\u85e4 \u9ebb\u8863', '\u4f50\u3005\u6728 \u62d3', '\u4f50\u85e4 \u52c7\u4f5c', '\u4f50\u85e4 \u78a7\u7f8e', '\u4f59\u7530 \u611b\u5b50', '\u516b\u5c3e \u304b\u305a\u307e', '\u54b2\u91ce \u3086\u308a', '\u571f\u4e95 \u91cd\u5f70', '\u5800\u7530 \u6709\u5e0c', '\u5927\u897f \u7f8e\u6c99', '\u5927\u962a\u5927\u5b66\u66f8\u9053\u90e8', '\u5b89\u5ddd \u771e\u4e5f', '\u5b9d\u5b50', '\u5bae\u8107 \u6709\u5b63', '\u5c0f\u6797 \u5343\u6676', '\u5c3e\u5d0e \u85ab', '\u5c71\u4e0b \u62d3\u90ce', '\u5c71\u53e3 \u771f\u5e0c', '\u5ca9\u702c \u7ae0\u5149', '\u5ddd\u5185 \u307e\u308a\u5b50', '\u5e73\u52e2 \u590f\u6d77', '\u5e73\u85ae \u98db\u9ce5', '\u5f8c\u85e4 \u4fca\u660e', '\u5fd7\u8cc0 \u771f\u5948', '\u65b0 \u6dbc\u5e73', '\u661f\u5c71 \u5553\u4e00', '\u6728\u4f50\u8cab \u6d0b\u5e73', '\u6728\u5c71 \u4eae\u5b50', '\u698e\u672c \u6709\u5e0c', '\u6a2a\u7530 \u7267\u5b50', '\u7530\u4e2d \u831c', '\u7551\u4e2d \u7adc\u4e5f', '\u771e\u5d0e \u6709\u8cb4', '\u771f\u7802 \u7f8e\u6a39', '\u798f\u6c5f \u5143\u592a', '\u7acb\u6728 \u8cb4\u4e5f', '\u7d00\u5e73 \u6681\u4eba', '\u897f\u53e3 \u82f1\u751f', '\u897f\u6751 \u6cf3\u5b50', '\u8fbb\u5ddd \u5c1a\u4ee3', '\u8fbb\u5ddd \u90f7', '\u91d1\u4e38 \u7cbe\u5fd7', '\u9577\u8c37\u5ddd \u7a3f\u53f2', '\u98ef\u7530 \u304b\u306a\u5b50', '\u9ad8\u6a4b \u771f\u73e0','\u65b0\u9053\u611b\u5e2b', '\u6238\u68b6\u548c\u5e0c', 'WistaFernost', '\u677e\u672c\u4e00\u5e0c', 'bud&harbor', '\u30b6\u30fb\u30b9\u30ca\u30cd\u30b3\u30ba', 'The Best Regards', 'yoshioka band circle','yutori', '\u30da\u30eb\u30b7\u30ab\u30ea\u30a2', 'Conton Candy', '\u30af\u30e9\u30a4\u30ce\u30fc\u30c8'];
var artist = artist_array[Math.floor(Math.random()*artist_array.length)];

document.forms.ttg130.elements.q_2.value = sex;
document.forms.ttg130.elements.q_16.value = age;
artist_san = Math.floor(Math.random()*100);
if(artist_san > 30){
  document.forms.ttg130.elements.q_3.value = artist + "さん";
}else{
  document.forms.ttg130.elements.q_3.value = artist;
}
