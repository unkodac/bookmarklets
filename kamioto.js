//性別選択
var sex_len = Math.floor(Math.random()*2);
if(sex_len == 0){
  var sex = "男性";
}else{
  var sex = "女性";
}
document.forms.ttg130.elements.q_2.value = sex;

//年代選択
var age_len = Math.floor(Math.random()*3);
if(age_len == 0){
  var age = "20代";
}else if(age_len == 1){
  var age = "30代";
}else{
  var age = "40代";
}
document.forms.ttg130.elements.q_16.value = age;

//質問1
var artist_array = ['461\u30e2\u30f3\u30d6\u30e9\u30f3','AIKO','Aly','Cheesa','Hirotausu','KAORI','KAORI&Cheesa','KenKen','Minako','OKU','QuatuorAVENA','R1SA','Salia','SAYOKO','SAYUMI','sotaro','STICK+','YOUJI','YuyaTomoi','\u30aa\u30ab\u30c0\u30c8\u30e2\u30e4','\u30ab\u30a6\u30dc\u30fc\u30a4\u67d3\u7530\u5c4b','\u3058\u3093\u306e\u3086\u3046\u3053','\u3084\u306a\u3081','\u30ea\u30a8\u30eb','\u4e0a\u5e73\u7530\u4e9c\u5915','\u4e0a\u7530\u5320','\u4e0b\u5185\u611b\u5b50','\u4e2d\u5c3e\u5065\u592a','\u4e2d\u5cf6\u5eb7\u96c5','\u4e38\u5c71\u831c\u8449','\u4e95\u91ce\u30a2\u30ad\u30f2','\u4ec1\u85e4\u9ebb\u8863','\u4f50\u3005\u6728\u62d3','\u4f50\u85e4\u52c7\u4f5c','\u4f50\u85e4\u78a7\u7f8e','\u4f59\u7530\u611b\u5b50','\u516b\u5c3e\u304b\u305a\u307e','\u54b2\u91ce\u3086\u308a','\u571f\u4e95\u91cd\u5f70','\u5800\u7530\u6709\u5e0c','\u5927\u897f\u7f8e\u6c99','\u5927\u962a\u5927\u5b66\u66f8\u9053\u90e8','\u5b89\u5ddd\u771e\u4e5f','\u5b9d\u5b50','\u5bae\u8107\u6709\u5b63','\u5c0f\u6797\u5343\u6676','\u5c3e\u5d0e\u85ab','\u5c71\u4e0b\u62d3\u90ce','\u5c71\u53e3\u771f\u5e0c','\u5ca9\u702c\u7ae0\u5149','\u5ddd\u5185\u307e\u308a\u5b50','\u5e73\u52e2\u590f\u6d77','\u5e73\u85ae\u98db\u9ce5','\u5f8c\u85e4\u4fca\u660e','\u5fd7\u8cc0\u771f\u5948','\u65b0\u6dbc\u5e73','\u661f\u5c71\u5553\u4e00','\u6728\u4f50\u8cab\u6d0b\u5e73','\u6728\u5c71\u4eae\u5b50','\u698e\u672c\u6709\u5e0c','\u6a2a\u7530\u7267\u5b50','\u7530\u4e2d\u831c','\u7551\u4e2d\u7adc\u4e5f','\u771e\u5d0e\u6709\u8cb4','\u771f\u7802\u7f8e\u6a39','\u798f\u6c5f\u5143\u592a','\u7acb\u6728\u8cb4\u4e5f','\u7d00\u5e73\u6681\u4eba','\u897f\u53e3\u82f1\u751f','\u897f\u6751\u6cf3\u5b50','\u8fbb\u5ddd\u5c1a\u4ee3','\u8fbb\u5ddd\u90f7','\u91d1\u4e38\u7cbe\u5fd7','\u9577\u8c37\u5ddd\u7a3f\u53f2','\u98ef\u7530\u304b\u306a\u5b50','\u9ad8\u6a4b\u771f\u73e0','\u65b0\u9053\u611b\u5e2b','\u6238\u68b6\u548c\u5e0c','WistaFernost','\u677e\u672c\u4e00\u5e0c','bud&harbor','\u30b6\u30fb\u30b9\u30ca\u30cd\u30b3\u30ba','TheBestRegards','yoshiokabandcircle','yutori','\u30da\u30eb\u30b7\u30ab\u30ea\u30a2','ContonCandy','\u30af\u30e9\u30a4\u30ce\u30fc\u30c8'];
var artist = artist_array[Math.floor(Math.random()*artist_array.length)];
artist_san = Math.floor(Math.random()*100);
if(artist_san > 30){
  document.forms.ttg130.elements.q_3.value = artist + "さん";
}else{
  document.forms.ttg130.elements.q_3.value = artist;
}

//質問2
var dance_array = ['\u8e0a', 'A\u30fbRA\u30fbSHI', 'Follow Me', '\u3058\u3087\u3044\u3075\u308b', 'ABC\u4f53\u64cd', 'ICY','WANNABE','\u604b\u3059\u308b\u30d5\u30a9\u30fc\u30c1\u30e5\u30f3\u30af\u30c3\u30ad\u30fc', '\u30d8\u30d3\u30fc\u30ed\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3', 'Choo Choo TRAIN', 'Given-Taken', '\u30c0\u30f3\u30b7\u30f3\u30b0\u30fb\u30d2\u30fc\u30ed\u30fc', '\u30df\u30b9\u30bf\u30fc', 'MONSTER DANCE', 'One Night Carnival', 'LOVE & JOY', '\u306b\u3093\u3058\u3083\u308a\u3070\u3093\u3070\u3093', '\u30b5\u30a4\u30ec\u30f3\u30c8\u30de\u30b8\u30e7\u30ea\u30c6\u30a3\u30fc', 'ONE NIGHT IN ARABIA','YOUNG MAN[Y.M.C.A.]', '\u65b0\u5b9d\u5cf6', 'R.Y.U.S.E.I.', 'OH-EH-OH', '\u7121\u9650\u5927', 'HELLO! HALO!', 'Make Me Better', '\u9752\u6625\u30a2\u30df\u30fc\u30b4', 'HACK', 'To The First','NEW ERA', 'HELLO HELLO', 'YumYumYum \uff5eSpicyGirl\uff5e', '\u821e\u3044\u843d\u3061\u308b\u82b1\u3073\u3089', 'Hug feat. kojikoji', 'U.S.A.', '\u30b0\u30c3\u30d0\u30a4\u5ba3\u8a00', 'EZ DO DANCE', 'SHAKE IT OFF', '\u30f4\u30a1\u30f3\u30d1\u30a4\u30a2', 'Heartbeat','Alcohol-Free', 'Kura Kura', 'TT', '\u3088\u3046\u304b\u3044\u4f53\u64cd\u7b2c\u4e00', '\u60d1\u661f\u30eb\u30fc\u30d7', 'NIGHT OF FIRE', 'Take a picture','Poppin Shakin', 'Make you happy', '\u30c8\u30ea\u30b3', 'NA', '\u30a4\u30f3\u30d5\u30eb\u30a8\u30f3\u30b5\u30fc', '\u30ad\u30df\u30cf\u30ad\u30df\u30c9\u30ea','\u540c\u62c5\u2606\u62d2\u5426','TOKYO GIRL','Dynamite', 'Permission to Dance', 'Butter', '\u30b7\u30eb\u30fb\u30f4\u30fb\u30d7\u30ec\u30b8\u30c7\u30f3\u30c8', 'PPAP', '\u30d7\u30ed\u30df\u30b9\u30b6\u30b9\u30bf\u30fc', '\u541b\u3057\u304b\u52dd\u305f\u3093', '\u30ad\u30e5\u30f3', '\u30cf\u30ec\u6674\u30ec\u30e6\u30ab\u30a4', '\u30d1\u30d7\u30ea\u30ab', 'DDU-DU DDU-DU', '\u30aa\u30c9\u30eb\u30fc\u30d7', '\u591c\u306b\u30c0\u30f3\u30b9', 'Let Me Fly\uff5e\u305d\u306e\u672a\u6765\u3078\uff5e','\u3046\u3061\u3067\u8e0a\u308d\u3046','\u604b', 'EXCITE', 'WanteD! WanteD!', 'BURNING DESIRE', '\u604b\u611b\u30ec\u30dc\u30ea\u30e5\u30fc\u30b7\u30e7\u30f321', '\u884c\u304f\u305c\u3063! \u602a\u76d7\u5c11\u5973', '\u30cf\u30c3\u30d4\u30fc\u30a6\u30a7\u30c7\u30a3\u30f3\u30b0\u524d\u30bd\u30f3\u30b0', '\u30bf\u30c3\u30bf', '\u3060\u304b\u3089\u3001\u3072\u3068\u308a\u3058\u3083\u306a\u3044', 'Mela!', 'PERFECT HUMAN'];
var dance = dance_array[Math.floor(Math.random()*dance_array.length)];
document.forms.ttg130.elements.q_5.value = dance;

//質問4
var intro_array = ['\u304a\u3069\u308b\u30dd\u30f3\u30dd\u30b3\u30ea\u30f3','\u6d6a\u6f2b\u98db\u884c','\u4eca\u3059\u3050Kiss Me','\u3055\u3088\u306a\u3089\u4eba\u985e','OH YEAH\uff01','Dear Friend','\u60c5\u71b1\u306e\u8594\u8587','\u304f\u3061\u3073\u308b\u304b\u3089\u5a9a\u85ac','\u771f\u590f\u306e\u679c\u5b9f','\u30a4\u30d5\u30fb\u30a6\u30a4\u30fb\u30db\u30fc\u30eb\u30c9\u30fb\u30aa\u30f3\u30fb\u30c8\u30a5\u30b2\u30b6\u30fc','\u30e9\u30d6\u30fb\u30b9\u30c8\u30fc\u30ea\u30fc\u306f\u7a81\u7136\u306b','SAY YES','\u611b\u306f\u52dd\u3064','\u3069\u3093\u306a\u3068\u304d\u3082\u3002','\u306f\u3058\u307e\u308a\u306f\u3044\u3064\u3082\u96e8','\u3042\u306a\u305f\u306b\u4f1a\u3048\u3066\u3088\u304b\u3063\u305f','LADY NAVIGATION','\u3057\u3083\u307c\u3093\u7389','Eyes to me\uff0f\u5f7c\u306f\u53cb\u9054','ALONE','\u541b\u304c\u3044\u308b\u3060\u3051\u3067','\u60b2\u3057\u307f\u306f\u96ea\u306e\u3088\u3046\u306b','BLOWIN','\u305d\u308c\u304c\u5927\u4e8b','\u6d99\u306e\u30ad\u30c3\u30b9','\u30ac\u30e9\u30ac\u30e9\u30d8\u30d3\u304c\u3084\u3063\u3066\u304f\u308b','\u3082\u3046\u604b\u306a\u3093\u3066\u3057\u306a\u3044','if','PIECE MY WISH','\u6d45\u3044\u7720\u308a','YAH YAH YAH','\u611b\u306e\u307e\u307e\u306b\u308f\u304c\u307e\u307e\u306b \u50d5\u306f\u541b\u3060\u3051\u3092\u50b7\u3064\u3051\u306a\u3044','\u30ed\u30fc\u30c9','\u30a8\u30ed\u30c6\u30a3\u30ab\u30fb\u30bb\u30d6\u30f3','\u88f8\u8db3\u306e\u5973\u795e','\u8ca0\u3051\u306a\u3044\u3067','\u6642\u306e\u6249','\u771f\u590f\u306e\u591c\u306e\u5922','\u63fa\u308c\u308b\u60f3\u3044','\u4e16\u754c\u4e2d\u306e\u8ab0\u3088\u308a\u304d\u3063\u3068','innocent world','\u30ed\u30de\u30f3\u30b9\u306e\u795e\u69d8','\u604b\u3057\u3055\u3068 \u305b\u3064\u306a\u3055\u3068 \u5fc3\u5f37\u3055\u3068','\u7a7a\u3068\u541b\u306e\u3042\u3044\u3060\u306b','Hello\uff0cmy friend','survival dAnce\uff5eno no cry more\uff5e','\u3042\u306a\u305f\u3060\u3051\u898b\u3064\u3081\u3066\u308b','Boy Meets Girl','\u4e16\u754c\u304c\u7d42\u308b\u307e\u3067\u306f\uff65\uff65\uff65','LOVE LOVE LOVE','WOW WAR TONIGHT\uff5e\u6642\u306b\u306f\u8d77\u3053\u305b\u3088\u30e0\u30fc\u30f4\u30e1\u30f3\u30c8','HELLO','Tomorrow never knows','\u30b7\u30fc\u30bd\u30fc\u30b2\u30fc\u30e0\uff5e\u52c7\u6562\u306a\u604b\u306e\u6b4c\uff5e','Hello\uff0cAgain\uff5e\u6614\u304b\u3089\u3042\u308b\u5834\u6240\uff5e','\u5947\u8de1\u306e\u5730\u7403','TOMORROW','\u30ed\u30d3\u30f3\u30bd\u30f3','LOVE PHANTOM','\u540d\u3082\u306a\u304d\u8a69','DEPARTURES','LA\u30fbLA\u30fbLA LOVE SONG','\u30c1\u30a7\u30ea\u30fc','\u82b1\uff0dMemento-Mori\uff0d','\u7a7a\u3082\u98db\u3079\u308b\u306f\u305a','\u611b\u306e\u8a00\u970a\uff5eSpiritual Message','Chase the Chance','CAN YOU CELEBRATE\uff1f','\u785d\u5b50\u306e\u5c11\u5e74','\u3072\u3060\u307e\u308a\u306e\u8a69','FACE','STEADY','PRIDE','YOU ARE THE ONE','Everything','HOWEVER','White Love','\u8a98\u60d1','\u591c\u7a7a\u30ce\u30e0\u30b3\u30a6','my graduation','\u30bf\u30a4\u30df\u30f3\u30b0','SOUL LOVE','\u9577\u3044\u9593','HONEY','\u611b\u3055\u308c\u308b\u3088\u308a \u611b\u3057\u305f\u3044','Time goes by','\u5168\u90e8\u3060\u304d\u3057\u3081\u3066\uff0f\u9752\u306e\u6642\u4ee3\u3060\u3093\u3054\uff13\u5144\u5f1f','Winter\uff0cagain','A','energy flow','Automatic','Addicted To You','LOVE\u30de\u30b7\u30fc\u30f3','BE WITH YOU','HEAVEN\u2019S DRIVE'];
var intro = intro_array[Math.floor(Math.random()*intro_array.length)];
document.forms.ttg130.elements.q_6.value = intro;

//質問5
var ityuu_array = ['\u304a\u3069\u308b\u30dd\u30f3\u30dd\u30b3\u30ea\u30f3','\u6d6a\u6f2b\u98db\u884c','\u4eca\u3059\u3050Kiss Me','\u3055\u3088\u306a\u3089\u4eba\u985e','OH YEAH\uff01','Dear Friend','\u60c5\u71b1\u306e\u8594\u8587','\u304f\u3061\u3073\u308b\u304b\u3089\u5a9a\u85ac','\u771f\u590f\u306e\u679c\u5b9f','\u30a4\u30d5\u30fb\u30a6\u30a4\u30fb\u30db\u30fc\u30eb\u30c9\u30fb\u30aa\u30f3\u30fb\u30c8\u30a5\u30b2\u30b6\u30fc','\u30e9\u30d6\u30fb\u30b9\u30c8\u30fc\u30ea\u30fc\u306f\u7a81\u7136\u306b','SAY YES','\u611b\u306f\u52dd\u3064','\u3069\u3093\u306a\u3068\u304d\u3082\u3002','\u306f\u3058\u307e\u308a\u306f\u3044\u3064\u3082\u96e8','\u3042\u306a\u305f\u306b\u4f1a\u3048\u3066\u3088\u304b\u3063\u305f','LADY NAVIGATION','\u3057\u3083\u307c\u3093\u7389','Eyes to me\uff0f\u5f7c\u306f\u53cb\u9054','ALONE','\u541b\u304c\u3044\u308b\u3060\u3051\u3067','\u60b2\u3057\u307f\u306f\u96ea\u306e\u3088\u3046\u306b','BLOWIN','\u305d\u308c\u304c\u5927\u4e8b','\u6d99\u306e\u30ad\u30c3\u30b9','\u30ac\u30e9\u30ac\u30e9\u30d8\u30d3\u304c\u3084\u3063\u3066\u304f\u308b','\u3082\u3046\u604b\u306a\u3093\u3066\u3057\u306a\u3044','if','PIECE MY WISH','\u6d45\u3044\u7720\u308a','YAH YAH YAH','\u611b\u306e\u307e\u307e\u306b\u308f\u304c\u307e\u307e\u306b \u50d5\u306f\u541b\u3060\u3051\u3092\u50b7\u3064\u3051\u306a\u3044','\u30ed\u30fc\u30c9','\u30a8\u30ed\u30c6\u30a3\u30ab\u30fb\u30bb\u30d6\u30f3','\u88f8\u8db3\u306e\u5973\u795e','\u8ca0\u3051\u306a\u3044\u3067','\u6642\u306e\u6249','\u771f\u590f\u306e\u591c\u306e\u5922','\u63fa\u308c\u308b\u60f3\u3044','\u4e16\u754c\u4e2d\u306e\u8ab0\u3088\u308a\u304d\u3063\u3068','innocent world','\u30ed\u30de\u30f3\u30b9\u306e\u795e\u69d8','\u604b\u3057\u3055\u3068 \u305b\u3064\u306a\u3055\u3068 \u5fc3\u5f37\u3055\u3068','\u7a7a\u3068\u541b\u306e\u3042\u3044\u3060\u306b','Hello\uff0cmy friend','survival dAnce\uff5eno no cry more\uff5e','\u3042\u306a\u305f\u3060\u3051\u898b\u3064\u3081\u3066\u308b','Boy Meets Girl','\u4e16\u754c\u304c\u7d42\u308b\u307e\u3067\u306f\uff65\uff65\uff65','LOVE LOVE LOVE','WOW WAR TONIGHT\uff5e\u6642\u306b\u306f\u8d77\u3053\u305b\u3088\u30e0\u30fc\u30f4\u30e1\u30f3\u30c8','HELLO','Tomorrow never knows','\u30b7\u30fc\u30bd\u30fc\u30b2\u30fc\u30e0\uff5e\u52c7\u6562\u306a\u604b\u306e\u6b4c\uff5e','Hello\uff0cAgain\uff5e\u6614\u304b\u3089\u3042\u308b\u5834\u6240\uff5e','\u5947\u8de1\u306e\u5730\u7403','TOMORROW','\u30ed\u30d3\u30f3\u30bd\u30f3','LOVE PHANTOM','\u540d\u3082\u306a\u304d\u8a69','DEPARTURES','LA\u30fbLA\u30fbLA LOVE SONG','\u30c1\u30a7\u30ea\u30fc','\u82b1\uff0dMemento-Mori\uff0d','\u7a7a\u3082\u98db\u3079\u308b\u306f\u305a','\u611b\u306e\u8a00\u970a\uff5eSpiritual Message','Chase the Chance','CAN YOU CELEBRATE\uff1f','\u785d\u5b50\u306e\u5c11\u5e74','\u3072\u3060\u307e\u308a\u306e\u8a69','FACE','STEADY','PRIDE','YOU ARE THE ONE','Everything','HOWEVER','White Love','\u8a98\u60d1','\u591c\u7a7a\u30ce\u30e0\u30b3\u30a6','my graduation','\u30bf\u30a4\u30df\u30f3\u30b0','SOUL LOVE','\u9577\u3044\u9593','HONEY','\u611b\u3055\u308c\u308b\u3088\u308a \u611b\u3057\u305f\u3044','Time goes by','\u5168\u90e8\u3060\u304d\u3057\u3081\u3066\uff0f\u9752\u306e\u6642\u4ee3\u3060\u3093\u3054\uff13\u5144\u5f1f','Winter\uff0cagain','A','energy flow','Automatic','Addicted To You','LOVE\u30de\u30b7\u30fc\u30f3','BE WITH YOU','HEAVEN\u2019S DRIVE'];
var ityuu = ityuu_array[Math.floor(Math.random()*ityuu_array.length)];
document.forms.ttg130.elements.q_7.value = ityuu;

//質問7
var umare_array = ['461\u30e2\u30f3\u30d6\u30e9\u30f3', 'AIKO', 'Aly', 'Cheesa', 'Hirotausu', 'KAORI', 'KAORI&Cheesa', 'KenKen', 'Minako', 'OKU', 'Quatuor AVENA', 'R1SA', 'Salia', 'SAYOKO', 'SAYUMI', 'sotaro', 'STICK+', 'YOUJI', 'YuyaTomoi', '\u30aa\u30ab\u30c0\u30c8\u30e2\u30e4', '\u30ab\u30a6\u30dc\u30fc\u30a4\u67d3\u7530\u5c4b', '\u3058\u3093\u306e\u3086\u3046\u3053', '\u3084\u306a\u3081', '\u30ea\u30a8\u30eb', '\u4e0a\u5e73\u7530 \u4e9c\u5915', '\u4e0a\u7530 \u5320', '\u4e0b\u5185 \u611b\u5b50', '\u4e2d\u5c3e \u5065\u592a', '\u4e2d\u5cf6 \u5eb7\u96c5', '\u4e38\u5c71 \u831c\u8449', '\u4e95\u91ce \u30a2\u30ad\u30f2', '\u4ec1\u85e4 \u9ebb\u8863', '\u4f50\u3005\u6728 \u62d3', '\u4f50\u85e4 \u52c7\u4f5c', '\u4f50\u85e4 \u78a7\u7f8e', '\u4f59\u7530 \u611b\u5b50', '\u516b\u5c3e \u304b\u305a\u307e', '\u54b2\u91ce \u3086\u308a', '\u571f\u4e95 \u91cd\u5f70', '\u5800\u7530 \u6709\u5e0c', '\u5927\u897f \u7f8e\u6c99', '\u5927\u962a\u5927\u5b66\u66f8\u9053\u90e8', '\u5b89\u5ddd \u771e\u4e5f', '\u5b9d\u5b50', '\u5bae\u8107 \u6709\u5b63', '\u5c0f\u6797 \u5343\u6676', '\u5c3e\u5d0e \u85ab', '\u5c71\u4e0b \u62d3\u90ce', '\u5c71\u53e3 \u771f\u5e0c', '\u5ca9\u702c \u7ae0\u5149', '\u5ddd\u5185 \u307e\u308a\u5b50', '\u5e73\u52e2 \u590f\u6d77', '\u5e73\u85ae \u98db\u9ce5', '\u5f8c\u85e4 \u4fca\u660e', '\u5fd7\u8cc0 \u771f\u5948', '\u65b0 \u6dbc\u5e73', '\u661f\u5c71 \u5553\u4e00', '\u6728\u4f50\u8cab \u6d0b\u5e73', '\u6728\u5c71 \u4eae\u5b50', '\u698e\u672c \u6709\u5e0c', '\u6a2a\u7530 \u7267\u5b50', '\u7530\u4e2d \u831c', '\u7551\u4e2d \u7adc\u4e5f', '\u771e\u5d0e \u6709\u8cb4', '\u771f\u7802 \u7f8e\u6a39', '\u798f\u6c5f \u5143\u592a', '\u7acb\u6728 \u8cb4\u4e5f', '\u7d00\u5e73 \u6681\u4eba', '\u897f\u53e3 \u82f1\u751f', '\u897f\u6751 \u6cf3\u5b50', '\u8fbb\u5ddd \u5c1a\u4ee3', '\u8fbb\u5ddd \u90f7', '\u91d1\u4e38 \u7cbe\u5fd7', '\u9577\u8c37\u5ddd \u7a3f\u53f2', '\u98ef\u7530 \u304b\u306a\u5b50', '\u9ad8\u6a4b \u771f\u73e0','\u65b0\u9053\u611b\u5e2b', '\u6238\u68b6\u548c\u5e0c', 'WistaFernost', '\u677e\u672c\u4e00\u5e0c', 'bud&harbor', '\u30b6\u30fb\u30b9\u30ca\u30cd\u30b3\u30ba', 'The Best Regards', 'yoshioka band circle','yutori', '\u30da\u30eb\u30b7\u30ab\u30ea\u30a2', 'Conton Candy', '\u30af\u30e9\u30a4\u30ce\u30fc\u30c8'];
var umare = umare_array[Math.floor(Math.random()*umare_array.length)];
if(artist_san > 30){
  document.forms.ttg130.elements.q_9.value = umare + "さん";
}else{
  document.forms.ttg130.elements.q_9.value = umare;
}

//質問8
var cm_array = ['Simple','Pixie','jam with iri','BAN BAN BAN','\u9283\u306e\u90e8\u54c1','\u30d4\u30eb\u30b0\u30ea\u30e0','Bare-Bare','\u30b5\u30e9\u30a6\u30f3\u30c9','Fire and Gold','Bye-Good-Bye','\u5927\u4eba\u306b\u306a\u3063\u3066','\u30ab\u30ca\u30ea\u30a2\u306e\u6b4c','Pale Rain','SUSHI\u98df\u3079\u305f\u3044 feat.\u30bd\u30a4\u30bd\u30fc\u30b9','\u300c\u60b2\u3057\u3044\u6c17\u6301\u3061 (JUST A MAN IN LOVE)\u300d','\u5927\u4eba\u306b\u306a\u3063\u3066','MoonWalker','FUN\u00d74','\u79c1\u306a\u308a\u306e','\u6c34\u661f \u00d7 \u4eca\u591c\u306f\u30d6\u30ae\u30fc\u30fb\u30d0\u30c3\u30af nice vocal','\u4eca\u591c\u306f\u30d6\u30ae\u30fc\u30fb\u30d0\u30c3\u30af nice vocal \u00d7 \u6c34\u661f','\u98a8\u306e\u8a69\u3092\u8074\u304b\u305b\u3066','Wonder','Tremolo','\u65e5\u3005\u3001\u7e54\u3005','First Time (feat. RIEHATA)','It\u2018s all about you feat. SIRUP','CALL FROM RIO','BIG4 BIGBOSS','POP SONG','HAND','\u611b\u3059\u308b\u4eba','palette','Clap and Clap','\u30a4\u30f3\u30af','\u3048\u306b\u3057\u3042\u308a\u3066','\u30d5\u30fc\u30a2\u30f3','\u30ad\u30e3\u30e9\u30af\u30bf\u30fc','\u671b\u307f','Overfilm','\u98a8\u304c\u3081\u304f\u308b\u30da\u30fc\u30b8','\u541b\u306e\u3072\u3068\u307f\u306f10000\u30dc\u30eb\u30c8','Life Road','\u5149\u3042\u308c','\u85cd\u3088\u308a\u7fa4\u9752 (feat. \u661f\u8857\u3059\u3044\u305b\u3044)','AIM','yoake','\u9032\u3081\uff01\u305d\u3063\u3061\u3060\uff01','\u30bf\u30bf\u30ab\u30a8\u30d6\u30ea\u30d0\u30c7\u30a3','Issei Uno Fifth & Rodeo','A perfect day','Landscape','\u304a\u3082\u304b\u3052 (produced by Vaundy)','\u85cd\u624d','Do Do','\u30d3\u30fc\u30e6\u30a2\u30bb\u30eb\u30d5','\u6df1\u591c\u9ad8\u901f','\u7460\u7483\u8272\u306e\u5730\u7403','F.O.O.L','\u30d7\u30e9\u30c8\u30fc','\u3042\u306e\u5922\u3092\u306a\u305e\u3063\u3066','Twinkle Twinkle','9 colors','FESTA','\u6d77\u5cb8\u7dda\u518d\u8a2a','\u3053\u306e\u591c\u306b\u5411\u3051','NERVEs','Juden','\u624d\u80fd\u958b\u82b1\u524d\u591c','MAKAFUKA','\u8679\u306e\u3064\u3065\u304d','\u30ca\u30df\u30c0\u3001\u3042\u308f\u96ea','\u4ffa\u3088\u308a\u5049\u3044\u5974','Bolero','Drive','\u30b7\u30e3\u30a6\u308a\u30fc\u30bf\u30a4\u30e0','\u4eba\u3068\u3057\u3066','\u7d20\u76f4\u306b\u306a\u308a\u305f\u3044\u5b50\u306e\u8a71\u3002','\u4e16\u754c\u306e\u79d8\u5bc6','Over the Season','\u30c8\u30de\u30bd\u30f3','Believer','\u306e\u3073\u3057\u308d','\u308f\u305f\u3057\u3092\u307f\u3066','\u98df\u3079\u305f\u611b','\u3042\u308a\u306e\u307e\u3093\u307e\u304c\u611b\u3057\u3044\u541b\u3078','Tokimeki','Beautiful World','Run&Go','Piece','Vaundy','Smile','GOLDEN TIME','\u30d7\u30ec\u30bc\u30f3\u30c8','\u5143\u6c17\u3092\u51fa\u3057\u3066','Soul\u30b3\u30d6\u30e9\u30c4\u30a4\u30b9\u30c8\uff5e\u9b42\u306e\u60b6\u7d76','\u30ca\u30a4\u30c8\u30c0\u30f3\u30b5\u30fc','Blue Moon','\u8001\u4eba\u3068\u6d77','\u30ea\u30c8\u30eb\u30c0\u30f3\u30b5\u30fc feat. Ito (PEOPLE 1)','\u708e\u306e\u8056\u6b4c\u968a [Choir(\u30af\u30ef\u30a4\u30a2)]','\u3053\u308c\u3060\u304b\u3089\u6700\u8fd1\u306e\u82e5\u8005\u306f\u6700\u9ad8\u306a\u3093\u3060','\u307f\u3089\u3044\u306e\u3046\u305f','\u3044\u305f\u3060\u304d\u307e\u3059','\u9cf3\u3068\u51f0','\u5507\u3088\u3001\u71b1\u304f\u541b\u3092\u8a9e\u308c','BAN','\u306b\u3058\u3044\u308d','\u984c\u540d\u306e\u306a\u3044\u4eca\u65e5','Deja Vu','BLUE SOULS','yonder','GIRL','me time','\u672a\u6765','Super Summer','\u4e09\u539f\u8272','\u6b21\u306e\u305b\uff5e\u306e\uff01\u3067 - ON THE GREEN HILL','Freedom','\u304f\u3060\u3089\u306a\u3044\u307e\u307e','\u4f55\u3082\u77e5\u3089\u306a\u3044\u307e\u307e\u3067','\u3042\u30fc\u590f\u4f11\u307f','color','BLUE WINGS','\u590f\u306e\u5947\u8de1','Ya Mama','\u3081\u7d44\u306e\u3072\u3068','\u3042\u3044\u3064\u3089\u5168\u54e1\u540c\u7a93\u4f1a','Lazy Boy','U+','RUNAWAY','arne','\u305f\u3068\u3048\u305f\u3068\u3048','\u63a5\u543b','\u6e26','\u305a\u3063\u3068\u305d\u3070\u3067\u898b\u5b88\u3063\u3066\u3044\u308b\u3088','Soda','\u9280\u6cb3\u9244\u9053999','\u53c8\u4e09\u90ce','RUNAWAY','Soda','\u5e38\u590f\u5a18','\u305a\u3063\u3068\u305a\u3063\u3068\u305a\u3063\u3068','\u3088\u3093\u3067\u30b3\u30fc\u30eb\u30df\u30fc','\u3042\u306e\u5922\u3092\u306a\u305e\u3063\u3066','\u516b\u6708\u306e\u967d\u708e','Beautiful','\u30b9\u30de\u30a4\u30eb\u30d5\u30e9\u30ef\u30fc','N.E.S.','Spring Field','Overnight','\u541b\u306f\u5929\u7136\u8272','\u30d0\u30fc\u30c9\u30de\u30f3','\u9ed2\u3044\u7ffc\u306e\u9593\u3092','\u3081\u304f\u308c\u305f\u30aa\u30ec\u30f3\u30b8','\u6b69\u3044\u3066\u5e30\u308d\u3046','Joy To The World','27','\u3042\u306e\u590f\u306e\u604b\u306f\u7729\u3057\u304f\u3066','\u304d\u3089\u308a','\u30ef\u30bf\u30b7\u30cf\u30b3\u30b3\u30cb\u30a4\u30de\u30b9 for \u96e8','\u30cf\u30eb\u30b8\u30aa\u30f3','Welcome One','SPLASH','\u541b\u306e\u5bb6\u3057\u304b\u77e5\u3089\u306a\u3044\u8857\u3067','Comin up','\u611b\u8a00\u8449','BLUE SOULS','\u5730\u7403\u5100','\u9752\u7a7a','\u30e9\u30a4\u30e9\u30c3\u30af','Alma','\u5929\u56fd','\u3057\u308f\u3042\u308f\u305b','wonderland','\u5de1\u308b\u5de1\u308b','\u9280\u6cb3\u9244\u9053999(\u300c\u9280\u6cb3\u9244\u9053999\u300d\u3088\u308a)','\u547d\u306e\u884c\u65b9','Poppin Shakin','I AM','\u92fc\u306e\u7fbd\u6839','Summertime','Light Of Hope','\u30a6\u30a4\u30b9\u30ad\u30fc\u304c\u3001\u304a\u597d\u304d\u3067\u3057\u3087','\u7a93\u306b\u5c04\u3059\u5149\u306e\u3088\u3046\u306b','\u9854\u30c9\u30f3','Beautiful Day','\u541b\u306e\u76ee\u3082\u9f3b\u3082\u53e3\u3082\u984e\u3082\u7709\u3082\u5bdd\u3066\u3082\u899a\u3081\u3066\u3082\u8d85\u7d20\u6575!!!','Take a picture','\u30c1\u30ad\u30f3\u30bd\u30f3\u30b0','\u30d4\u30fc\u30bf\u30fc\u30d1\u30f3','\u672c\u97f3','\u30d1\u30f3\u30c9\u30e9','\u3055\u3073\u3057\u3055','\u6642\u4ee3','\u50d5\u306f\u4eca\u65e5\u3082','\u602a\u7363\u306e\u82b1\u5504','\u30dd\u30b1\u30c3\u30c8\u304b\u3089\u304d\u3085\u3093\u3067\u3059\uff01','\u5149\u3042\u3064\u3081\u3066\u304a\u3044\u3067\u3088','Tell me',' Tell me','\u98a8\u306b\u306a\u3063\u3066','Breathin','\u660e\u308b\u3044\u672a\u6765','Another Day Of Sun (With Radios)','Answer','\u7247\u604b','\u307e\u3055\u304b\u306d','\u30d1\u30ec\u30fc\u30c9 - PARADE','\u304d\u3089\u304d\u3089\u3072\u304b\u308c','\u30a2\u30eb\u30eb','\u795d\u796d','Poppin Shakin','Wonderful World','\u30cb\u30e5\u30fc\u30ce\u30fc\u30de\u30eb','Friend Ship','\u5275\u9020','\u30d5\u30a7\u30a2\u30ea\u30fc\u30c6\u30fc\u30eb','\u304a\u5b50\u3055\u307e\u30d7\u30ec\u30fc\u30c8','\u30b9\u30c8\u30c3\u30d7\u30fb\u30e2\u30fc\u30b7\u30e7\u30f3','Jewel','STARTLINE','\u304a\u306a\u3058\u8a71','RAIN','\u82e5\u3044\u5e83\u5834','\u3044\u3064\u304b\u4f55\u51e6\u304b\u3067(I FEEL THE ECHO)','\u5e73\u884c\u7dda','\u795d\u796d','\u30ac\u30e0\u30ac\u30e0\u30ac\u30fc\u30eb','\u306b\u3083\u3093\u9177\u306a\u306b\u3083\u3093\u3053\u306e\u30c6\u30fc\u30bc','\u4f1d\u3048\u3089\u308c\u308b\u306a\u3089','Quiet Light','\u307f\u3093\u306a\u3063\u3066\u30a8\u30d6\u30ea\u30ef\u30f3!','overzone','\u98a8\u306b\u306a\u3063\u3066 (1 Half ver.)','\u6625\u6ce5\u68d2','April True','\u604b\u30fb\u30db\u30ef\u30a4\u30c8\u30a2\u30a6\u30c8','\u304a\u306a\u3058\u8a71','bloom','One Night Carnival','\u30a2\u30f3\u30b3\u30fc\u30eb','evergreen','As a route of ray','2\u4eba\u306e\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9','Savage Sun (feat. GLIM SPANKY)','\u60f3\u3046\u305f','Joyful','\u4f1a\u3044\u306b\u884c\u304f','\u5c71\u5d0exCM','\u5e38\u8d85 feat. \u904a\u52a9','\u3042\u308a\u304c\u3068\u3046','BIRD WITHOUT','\u30d1\u30fc\u30d5\u30a7\u30af\u30c8\u30fb\u30eb\u30fc\u30ad\u30fc\u30ba','Nobody\u2019s fault','\u672c\u97f3','\u5343\u4e21\u5f79\u8005','Get Loud','\u604b\u4eba\u3054\u3063\u3053','365\u65e5\u30b5\u30f3\u30bf\u30af\u30ed\u30fc\u30b9','Step and a step','What Cha Gonna Do','\u30d1\u30ec\u30fc\u30c9 - PARADE','\u4f55\u51e6\u304b\u306e\u8857\u306e\u541b\u3078','\u76d7\u4f5c','\u518d\u4f1a (produced by Ayase)','\u96ea\u306e\u9053\u3057\u308b\u3079','\u30a2\u30a4\u30ce\u30ab\u30bf\u30c1 (So Special Ver.)','Eyes','\u30cf\u30d4\u30cd\u30b9','\u541b\u3068drive','Party Starters','\u6eb6\u3051\u306a\u3044','Show Me How','STORY OF DUTY','\u771f\u591c\u4e2d\u306e\u51e6\u65b9\u7b8b','\u5947\u8de1 2021','\u597d\u304d\u597d\u304d\u5927\u597d\u304d','Super good','\u3072\u3068\u304b\u3051\u3089','Boogie Ride','\u30e9\u30a4\u30ca\u30a6','Time Warp','\u306d\u304c\u3044','\u7a7a\u767d\u3054\u3063\u3053','Jerk It Out [New Brauer Mix] [Single Edit]','\u98a8\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb','ZIG ZAG feat. BIM','\u30dd\u30ab\u30ea\u4f1d\u8aac','Philip','WING','Every One Minute','Japanese Cherry','Great Conjunction 2020','Favorite Rendezvous','\u9192\u3081\u306a\u3044\u3067\u3001\u9752\u6625','\u30c9\u30a5\u30fb\u30ce\u30fc\u30fb\u30db\u30ef\u30a4','\u307c\u304f\u306f\u9650\u308a\u306a\u3044\u301cOne for the show\u301c','\u7b92\u661f\u98f4\u5e97','\u541b\u306e\u80cc\u4e2d\u306b\u306f\u3044\u3064\u3082\u611b\u304c\u3042\u308b','Give me the Tank-top','\u611b\u306a\u3093\u3066\u3044\u3089\u306a\u3044','\u7fa4\u9752','\u4e09\u65e5\u6708','HAPPY SONG','\u4e0d\u53ef\u5e78\u529b','My Home','Grab the air','Sunny drop','24-7\u306e\u30d6\u30eb\u30fc\u30b9','Parachute','\u8ff7\u3048\u308b\u7f8a','\u3042\u306a\u305f\u3068 \u79c1\u3068','Keep On Running','\u7b2c\u516d\u611f','Sweet and Sour','\u30ad\u30f3\u30ab\u30f3\u306e\u3046\u305f2020','\u6ce1 Our Music','\u7cf8','\u30b9\u30de\u30a4\u30eb','NEW DAY DREAMER','\u590f\u306e\u52a0\u901f\u5ea6 \uff5eKiss In My Heart\uff5e','Blowing in the Wind','Church feat.EARTHGANG','\u306b\u3093\u3058\u3083\u308a\u3070\u3093\u3070\u3093 (Steve Aoki Remix)','LUCK','\u611b\u306e\u8cdb\u6b4c','\u597d\u304d\u306a\u3053\u3068\u3092\u697d\u3057\u307f\u306a\u304c\u3089 feat. \u5ca9\u5d0e\u611b','\u53eb\u3079','inside you','\u30b9\u30fc\u30c0\u30e9\u7bc0','\u30ea\u30dc\u30f3 feat.\u685c\u4e95\u548c\u5bff(Mr.Children)','\u541b\u306b\u3001\u80f8\u30ad\u30e5\u30f3\u3002-\u6d6e\u6c17\u306a\u30f4\u30a1\u30ab\u30f3\u30b9-','\u590f\u7a7a\u306e\u4e0b','\u58f0','24-25','Join the Party Tune!!','\u98a8\u3092\u3042\u3064\u3081\u3066','Smile','\u30ea\u30e7\u30a6\u30e1\u30f3\u30b7\u30c0','\u5922\u82b1\u706b','DIAMONDS (\u30c0\u30a4\u30a2\u30e2\u30f3\u30c9)','\u30b0\u30c3\u30c9\u30d0\u30a4','SWEET MEMORIES (\u7518\u3044\u8a18\u61b6)','\u7d05\u84ee\u83ef','Because We Can','\u30de\u30ea\u30fc\u30b4\u30fc\u30eb\u30c9','\u30cf\u30eb\u30ce\u30d2','\u3086\u3081\u3044\u3063\u3071\u3044','Mela!','Flash!!!','20TH CENTURY BOY','\u5e74\u4e2d\u6df7\u4e71\u4e2d','\u30d1\u30e9\u30dc\u30e9','\u5175\u3001\u8d70\u308b','\u30b5\u30fc\u30ad\u30c3\u30c8\u306e\u5a18','\u732b\u3058\u3083\u3089\u3057','\u3046\u308c\u3057\u304f\u3063\u3066\u62b1\u304d\u3042\u3046\u3088','\u672a\u6765','\u306d\u3058\u3053','Dropout','\u6700\u7d42\u5ba3\u544a','\u305f\u3057\u304b\u306a\u3053\u3068\u306f','VOICE','Letter','\u65b0\u5b9d\u5cf6','Bang!','Freedom','\u30a2\u30a4\u30a2\u30e0\u4e3b\u4eba\u516c','We Only Come Out At Night','\u82b1\u54b2\u30af\u8857','\u9752\u7a7a','Look At Me Now','\u304d\u307f\u3078\u306e\u611b\u3092\u8a00\u8449\u306b\u3059\u308b\u3093\u3060','SWEET MEMORIES','High Hopes','\u611f\u50b7\u8b33\u6b4c','Sparkle','\u5c0f\u3055\u306a\u60d1\u661f','\u30e6\u30fc\u30e2\u30a2','\u65c5\u306f\u9053\u9023\u308c','\u5fc3\u4e88\u5831','\u30bb\u30f3\u30b9\u30fb\u30aa\u30d6\u30fb\u30ef\u30f3\u30c0\u30fc','And I Love Car','\u3042\u306a\u305f\u306b\u4f1a\u3048\u3066','24-25','\u30e9\u30f3\u30ca\u30fc\u30ba\u30cf\u30a4','\u307f\u3093\u306a\u81ea\u7531\u3060','\u66c7\u308a\u591c\u7a7a\u306f\u96e8\u306e\u4e88\u5831','try again','This Is Me','All Around The World','\u30ea\u30ba\u30e0','RPG','Open Hearts','CHEERS','Teenager Forever','\u767d\u9280','White Afternoon','Joan','HONDA','COMINATCHA!!','Enjoy!','You & I','medicine','Look Up','\u898b\u3063\u3051','Church feat.EARTHGANG','\u98db\u884c\u8247','Freedom In The Dark','I Was Born to Love You','Hot Water','Natural Woman','\u5175\u3001\u8d70\u308b','\u5098','RILY','\u30d7\u30ed\u30dd\u30fc\u30ba 2019','Sunshine Love','\u307c\u304f\u306e\u8857\u306b\u904a\u3073\u306b\u304d\u3066\u3088','\u7d9a\u3051\u308b\u30ba\u306e\u30c6\u30fc\u30de','\u50d5\u3089\u306e\u3046\u307e\u3055\u306f\u3053\u3053\u306b\u3042\u308b','\u611b\u306e\u3042\u3044\u3055\u3064','\u30ec\u30fc\u30be\u30f3\u30c7\u30fc\u30c8\u30eb','GRUNGE WORLD','Rat-tat-tat','460 \uff5eYOUR SONG\uff5e','\u611b\u71e6\u71e6','\u70c8\u8d70','\u6708\u8272\u30db\u30e9\u30a4\u30ba\u30f3 (chill out ver.)','Eye of the Storm','\u611b\u306b\u3067\u304d\u308b\u3053\u3068\u306f\u307e\u3060\u3042\u308b\u304b\u3044','\u30b0\u30e9\u30f3\u30c9\u30a8\u30b9\u30b1\u30fc\u30d7\uff08Movie edit\uff09feat.\u4e09\u6d66\u900f\u5b50','\u30af\u30ed\u30b9\u30ed\u30fc\u30c9','\u30df\u30b9\u30bf\u30fc\u30ab\u30a4\u30c8','BE MY BABY','GreenGreen','\u9ad8\u5dba\u306e\u82b1\u5b50\u3055\u3093','\u590f\u306e\u3069\u3053\u304b\u3078','\u5fd8\u308c\u3089\u308c\u306a\u3044\u306e','\u30ca\u30a4\u30ed\u30f3\u306e\u7cf8','\u8a18\u5ff5\u64ae\u5f71','Play A Love Song','In My Blood','\u8d8a\u3048\u3066\u3044\u3051','ECHO','\u79c1\u306f\u30a4\u30e2\u30c8 Part II','\u3072\u307e\u308f\u308a\u3055\u304f\u307e\u3067\u3042\u3068\u3059\u3053\u3057','\u8a00\u8449','\u30e9\u30e0\u306e\u30e9\u30d6\u30bd\u30f3\u30b0','OMOIDE IN MY HEAD','Classic','Breakthrough','HAPPY HAPPY','\u3084\u304f\u305d\u304f\u306e\u3046\u305f','Over Drive','\u7b11\u3063\u3066\u7b11\u3063\u3066\u5e78\u305b\u306b','\u30ca\u30ca\u30ca\u30ca\u30ca\u30a4\u30ed','\u6708\u8272\u30db\u30e9\u30a4\u30ba\u30f3','\u50d5\u3089\u306e\u8857','\u30a6\u30a4\u30b9\u30ad\u30fc\u304c\u3001\u304a\u597d\u304d\u3067\u3057\u3087','\u82b1','Smells Like Teenage Riot','\u58f0\u304c\u805e\u3053\u3048\u308b','I wish','SEIMEI','\u4e94\u6708\u96e8\u5f0f\u3067\u3059\u307f\u307e\u305b\u3093','OH\uff01','\u604b\u306e\u30de\u30a4\u30a2\u30d2','\u63fa\u308c\u308b\u60f3\u3044','\u30d0\u30b1\u30ce\u30ab\u30ef','Ca Va?','\u604b\u3068\u611b','LIFE feat.bird (Retune)','Right and Left','\u3042\u3002\u3063\u3068\u3044\u3046\u9593\u306f\u3042\u308b\u3055','going my way','\u89e3\u304d\u653e\u3066\u3001\u6211\u3089\u304c\u65b0\u6642\u4ee3','\u30a4\u30c1\u30ea\u30f3\u30bd\u30a6','dazzling tomorrow','\u30c9\u30e9\u30de','\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3','Summertime','\u5929\u9053\u866b','Over The Rainbow','\u3042\u304b\u308b\u3044\u3088\u308b\u306b','\u30d2\u30d7\u30ce\u30b7\u30b9\u30de\u30a4\u30af -Division Battle Anthem-','Hitman','Witch','How-to','\u30ed\u30de\u30f3\u30c1\u30b7\u30ba\u30e0','\u305d\u3046\u3060\u3001\u50d5\u3089\u306f','\u30de\u30a4\u30af\u30ed\u30d5\u30a9\u30f3','\u9752\u6625','\u4ef0\u3052\u3070\u9752\u7a7a','kit palette','Jump','Stand Out Fit In','\u9752\u6625\u3068\u4e00\u77ac','\u56de\u60f3\u96fb\u8eca','Sorrows','\u723d\u5065\u7f8e\u8336\u306e\u30e9\u30c3\u30d7','\u3067\u304d\u3063\u3053\u306a\u3044\u3092 \u3084\u3089\u306a\u304f\u3061\u3083','\u3042\u306a\u305f\u306b','Do Well','Chandelier','\u6728\u67af\u3057\u306b\u62b1\u304b\u308c\u3066','\u30a2\u30c3\u30d7\u30eb\u30c6\u30a3\u30fc','\u3084\u3055\u3057\u3055\u306b\u5305\u307e\u308c\u305f\u306a\u3089','Dura','K.I.S.S.I.N.G.','\u30a6\u30bf\u30b3\u30af','\u30ad\u30df\u30ce\u30c1\u30ab\u30e9','Whatever','\u4e00\u7dd2\u306b\u3044\u3053\u3046','WE DO','\u30b5\u30d4\u30a8\u30f3\u30b9','Lemon','Flamingo','years','\u30ef\u30bf\u30ea\u30c9\u30ea','Where You Are','go for it!','\u60c5\u71b1\u306e\u8594\u8587','\u30de\u30a4\u30ca\u30d3\u30d0\u30a4\u30c8\u306e\u6b4c (2017)','TEENAGE RIOT','\u30af\u30ea\u30b9\u30de\u30b9\u304c\u3084\u3063\u3066\u304f\u308b','READY TO GO','\u3082\u3057\u3082\u50d5\u3089\u304cGAME\u306e\u4e3b\u5f79\u3067','\u5927\u6a4b\u30c8\u30ea\u30aa','\u30af\u30ea\u30b9\u30de\u30b9\u30bd\u30f3\u30b0','Trampoline','So Beautiful','VOICE','\u306a\u3093\u3067\u3082\u306a\u3044\u3084','\u30b9\u30bf\u30fc\u30e9\u30a4\u30c8\u30d1\u30ec\u30fc\u30c9','RAIN','DREAMS COME TRUE','\u4eba\u306b\u3084\u3055\u3057\u304f','Bad Man feat.Robin Thicke','Joe Perry','Travis Barker','Flashing Lights','\u767d\u7c73\u306e\u5473','\u4e16\u754c\u306f\u3042\u306a\u305f\u306b\u7b11\u3044\u304b\u3051\u3066\u3044\u308b -winter ver.-','\u6674\u3005','\u30e1\u30c8\u30ed','Thunderclouds feat.Sia','Diplo','Labrinth','\u304a\u5bb6\u3092\u3064\u304f\u308d\u3046','My Favorite Things','\u82b1','\u8a18\u61b6','Natural Woman','Because I\u2019m Me','\u900f\u660e\u4eba\u9593','Shine','\u4e16\u754c\u306f\u3042\u306a\u305f\u306b\u7b11\u3044\u304b\u3051\u3066\u3044\u308b','\u58ee\u5e74JUMP','\u590f\u304c\u6765\u308b\uff01','\u52ff\u5fd8\u306b\u304f\u3061\u3065\u3051','\u7d05 (\u30b7\u30f3\u30b0\u30eb\u30fb\u30ed\u30f3\u30b0\u30f4\u30a1\u30fc\u30b8\u30e7\u30f3)','\u6dcb\u3057\u3044\u71b1\u5e2f\u9b5a','LOSER','Change','808','care','\u6a2a\u9854','Play A Love Song','Slight Slight','\u30ab\u30f3\u30d1\u30a4\u306e\u5504','\u516c\u5712\u901a\u308a','\u30cf\u30ca\u30a6\u30bf','Kiss You Back','\u30cf\u30ed\u30fc\u30b0\u30c3\u30c7\u30a4','\u7cf8','\u6ce3\u304d\u305f\u3044\u304f\u3089\u3044','\u304d\u307f\u306e\u307f\u304b\u305f','ONE TIMES ONE','\u6c34\u8272\u306e\u65e5\u3005','\u30ac\u30e9\u30b9\u3092\u5272\u308c\uff01','\u30cf\u30fc\u30c8\u30a2\u30c3\u30d7','Paradise Has No Border','\u7b11\u304a\u3046','\u3084\u3063\u3066\u307f\u3088\u3046','\u898b\u305f\u3053\u3068\u3082\u306a\u3044\u666f\u8272','\u5927\u7a7a\u3067\u62b1\u304d\u3057\u3081\u3066','\u660e\u65e5\u3082','What Do You Mean?','STAY TUNE','\u307e\u3082\u308a\u305f\u3044\uff5e\u3053\u306e\u4e21\u624b\u306e\u4e2d\uff5e','\u30cf\u30c3\u30d4\u30fc','\u6d77\u306e\u58f0','\u3088\u30fc\u3001\u305d\u3053\u306e\u82e5\u3044\u306e','\u653b\u3081\u3066\u3044\u3053\u30fc\u305c!','Shake It Off','\u30d5\u30a1\u30c3\u30b7\u30e7\u30f3\u30e2\u30f3\u30b9\u30bf\u30fc','\u7720\u305f\u304f\u3066','365\u65e5','\u307e\u305f\u541b\u306b\u604b\u3057\u3066\u308b','Viva La Vida','WINDING ROAD','A Perfect Sky','Walk This Way','\u305f\u3057\u304b\u306a\u3053\u3068','Oriental Wind','STAND BY ME','Dreamland','\u305f\u3089\u3053\u30fb\u305f\u3089\u3053\u30fb\u305f\u3089\u3053','Are you Gonna Be My Girl','Whatever','\u3042\u306a\u305f\u306b','\u660e\u65e5\u304c\u3042\u308b\u3055 (\u30b8\u30e7\u30fc\u30b8\u30a2\u3067\u884c\u304d\u307e\u3057\u3087\u3046\u7de8)','Brand-New Myself\uff5e\u50d5\u306b\u3067\u304d\u308b\u3053\u3068\uff5e','\u8a00\u8449\u306b\u3067\u304d\u306a\u3044','Sunny Day Sunday','white key','\u7a81\u7136','\u30aa\u30d6\u30e9\u30c7\u30a3\u30fb\u30aa\u30d6\u30e9\u30c0','\u6d6a\u6f2b\u98db','MUGO\u30fb\u3093\u30fb\u30fb\u30fb\u8272\u3063\u307d\u3044','\u5922\u4f1d\u8aac','\u3044\u3044\u65e5 \u65c5\u7acb\u3061','\u3042\u306a\u305f','OVERSTAND','\u3042\u306a\u305f\u4ee5\u5916\u8ab0\u3082\u611b\u305b\u306a\u3044','Hey Now','Forever','\u72ac\u3001\u9003\u3052\u305f\u3002','sonic manic'];
var cm = cm_array[Math.floor(Math.random()*cm_array.length)];
document.forms.ttg130.elements.q_10.value = cm;

//質問9
var song18_array = ['\u304a\u3069\u308b\u30dd\u30f3\u30dd\u30b3\u30ea\u30f3','\u6d6a\u6f2b\u98db\u884c','\u4eca\u3059\u3050Kiss Me','\u3055\u3088\u306a\u3089\u4eba\u985e','OH YEAH\uff01','Dear Friend','\u60c5\u71b1\u306e\u8594\u8587','\u304f\u3061\u3073\u308b\u304b\u3089\u5a9a\u85ac','\u771f\u590f\u306e\u679c\u5b9f','\u30a4\u30d5\u30fb\u30a6\u30a4\u30fb\u30db\u30fc\u30eb\u30c9\u30fb\u30aa\u30f3\u30fb\u30c8\u30a5\u30b2\u30b6\u30fc','\u30e9\u30d6\u30fb\u30b9\u30c8\u30fc\u30ea\u30fc\u306f\u7a81\u7136\u306b','SAY YES','\u611b\u306f\u52dd\u3064','\u3069\u3093\u306a\u3068\u304d\u3082\u3002','\u306f\u3058\u307e\u308a\u306f\u3044\u3064\u3082\u96e8','\u3042\u306a\u305f\u306b\u4f1a\u3048\u3066\u3088\u304b\u3063\u305f','LADY NAVIGATION','\u3057\u3083\u307c\u3093\u7389','Eyes to me\uff0f\u5f7c\u306f\u53cb\u9054','ALONE','\u541b\u304c\u3044\u308b\u3060\u3051\u3067','\u60b2\u3057\u307f\u306f\u96ea\u306e\u3088\u3046\u306b','BLOWIN','\u305d\u308c\u304c\u5927\u4e8b','\u6d99\u306e\u30ad\u30c3\u30b9','\u30ac\u30e9\u30ac\u30e9\u30d8\u30d3\u304c\u3084\u3063\u3066\u304f\u308b','\u3082\u3046\u604b\u306a\u3093\u3066\u3057\u306a\u3044','if','PIECE MY WISH','\u6d45\u3044\u7720\u308a','YAH YAH YAH','\u611b\u306e\u307e\u307e\u306b\u308f\u304c\u307e\u307e\u306b \u50d5\u306f\u541b\u3060\u3051\u3092\u50b7\u3064\u3051\u306a\u3044','\u30ed\u30fc\u30c9','\u30a8\u30ed\u30c6\u30a3\u30ab\u30fb\u30bb\u30d6\u30f3','\u88f8\u8db3\u306e\u5973\u795e','\u8ca0\u3051\u306a\u3044\u3067','\u6642\u306e\u6249','\u771f\u590f\u306e\u591c\u306e\u5922','\u63fa\u308c\u308b\u60f3\u3044','\u4e16\u754c\u4e2d\u306e\u8ab0\u3088\u308a\u304d\u3063\u3068','innocent world','\u30ed\u30de\u30f3\u30b9\u306e\u795e\u69d8','\u604b\u3057\u3055\u3068 \u305b\u3064\u306a\u3055\u3068 \u5fc3\u5f37\u3055\u3068','\u7a7a\u3068\u541b\u306e\u3042\u3044\u3060\u306b','Hello\uff0cmy friend','survival dAnce\uff5eno no cry more\uff5e','\u3042\u306a\u305f\u3060\u3051\u898b\u3064\u3081\u3066\u308b','Boy Meets Girl','\u4e16\u754c\u304c\u7d42\u308b\u307e\u3067\u306f\uff65\uff65\uff65','LOVE LOVE LOVE','WOW WAR TONIGHT\uff5e\u6642\u306b\u306f\u8d77\u3053\u305b\u3088\u30e0\u30fc\u30f4\u30e1\u30f3\u30c8','HELLO','Tomorrow never knows','\u30b7\u30fc\u30bd\u30fc\u30b2\u30fc\u30e0\uff5e\u52c7\u6562\u306a\u604b\u306e\u6b4c\uff5e','Hello\uff0cAgain\uff5e\u6614\u304b\u3089\u3042\u308b\u5834\u6240\uff5e','\u5947\u8de1\u306e\u5730\u7403','TOMORROW','\u30ed\u30d3\u30f3\u30bd\u30f3','LOVE PHANTOM','\u540d\u3082\u306a\u304d\u8a69','DEPARTURES','LA\u30fbLA\u30fbLA LOVE SONG','\u30c1\u30a7\u30ea\u30fc','\u82b1\uff0dMemento-Mori\uff0d','\u7a7a\u3082\u98db\u3079\u308b\u306f\u305a','\u611b\u306e\u8a00\u970a\uff5eSpiritual Message','Chase the Chance','CAN YOU CELEBRATE\uff1f','\u785d\u5b50\u306e\u5c11\u5e74','\u3072\u3060\u307e\u308a\u306e\u8a69','FACE','STEADY','PRIDE','YOU ARE THE ONE','Everything','HOWEVER','White Love','\u8a98\u60d1','\u591c\u7a7a\u30ce\u30e0\u30b3\u30a6','my graduation','\u30bf\u30a4\u30df\u30f3\u30b0','SOUL LOVE','\u9577\u3044\u9593','HONEY','\u611b\u3055\u308c\u308b\u3088\u308a \u611b\u3057\u305f\u3044','Time goes by','\u5168\u90e8\u3060\u304d\u3057\u3081\u3066\uff0f\u9752\u306e\u6642\u4ee3\u3060\u3093\u3054\uff13\u5144\u5f1f','Winter\uff0cagain','A','energy flow','Automatic','Addicted To You','LOVE\u30de\u30b7\u30fc\u30f3','BE WITH YOU','HEAVEN\u2019S DRIVE'];
var song18 = song18_array[Math.floor(Math.random()*song18_array.length)];
document.forms.ttg130.elements.q_11.value = song18;
