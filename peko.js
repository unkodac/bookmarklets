const inputEvent = new Event("input", {"bubbles":true});
const changeEvent = new Event("change");
var datalist = ["brights-04-arc@icloud.com","h9nTk7tCWm9b","08082119234","滝本","悠風","タキモト","ハルカ","19950207","1360083","東京都","江東区","若洲","3-121","4582690017582863","0928","354","TAKIMOTO","HARUKA","pets_timid.0q@icloud.com","aCK2FahM2625","09057576266","杉","有紗","スギ","アリサ","19930111","1920373","東京都","八王子市","上柚木","2-258","4582690018411468","0928","720","SUGI","ARISA","swath_0_pore@icloud.com","PHsE8XTuprmi","09089244325","来栖","陽翠","クルス","ヒスイ","19970323","1820015","東京都","調布市","八雲台","2-416","4582690014637223","0928","034","KURUSU","HISUI","wailer_opaque0m@icloud.com","33Ljv5d8sWUM","07042054409","柳原","亜月","ヤナギハラ","アヅキ","20000314","1730013","東京都","板橋区","氷川町","4-426","4582690018081196","0928","608","YANAGIHARA","AZUKI","timid.scruff0o@icloud.com","GaFu0mmWzERb","08080359004","新納","奏","アラノ","カナデ","19920419","1440054","東京都","大田区","新蒲田","4-389","4582690019544598","0928","035","ARANO","KANADE","radix-morays0o@icloud.com","XkKyxiU76Lwk","07028259394","若尾","杏","ワカオ","アンズ","19970501","1250043","東京都","葛飾区","金町浄水場","3-181","4582690019232442","0928","139","WAKAO","ANZU","uptick_recency_03@icloud.com","k4bxn3qGdudG","08084738666","藤倉","穂積","フジクラ","ホヅミ","19990627","1440043","東京都","大田区","羽田","1-396","4582690017574076","0928","213","FUJIKURA","HOZUMI","sessile-terms0s@icloud.com","jcbTv3HQMTtT","08081157119","星原","波音","ホシハラ","ナミネ","19950518","1350034","東京都","江東区","永代","3-405","4582690017979085","0928","121","HOSHIHARA","NAMINE","remark_gaits_0e@icloud.com","xvx6GBubc8A9","08081466616","中原","藤花","ナカハラ","トウカ","19961011","1730011","東京都","板橋区","双葉町","1-431","4582690019293394","0928","366","NAKAHARA","TOKA","plateau_forces.0c@icloud.com","2YrnSKuS4zvt","07026203072","今田","祭","イマダ","マツリ","19920415","1740056","東京都","板橋区","志村","1-155","4582690019968250","0928","944","IMADA","MATSURI","prairie_club0y@icloud.com","ZpKYRNpaAD9z","08087147703","政岡","貴良","マサオカ","タカラ","19980917","1830033","東京都","府中市","分梅町","2-113","4582690019328448","0928","824","MASAOKA","TAKARA","pending.rare0g@icloud.com","jGGJrWk5QqVN","08026794595","浦山","乃々香","ウラヤマ","ノノカ","19910216","1400015","東京都","品川区","西大井","4-156","4582690018520995","0928","678","URAYAMA","NONOKA","spheres.menisci_0f@icloud.com","8zhTw4sTNPQr","08013881237","板野","更","イタノ","サラ","19990105","1950075","東京都","町田市","山崎","4-259","4582690015430248","0928","003","ITANO","SARA","retired00.tapirs@icloud.com","mzDkJRe8cJKu","07042054661","大室","亜寿沙","オオムロ","アズサ","19960524","1970831","東京都","あきる野市","下代継","4-406","4582690019734199","0928","071","OMURO","AZUSA","squawk-daft.0z@icloud.com","WKP4AZzRuSZA","08095231063","成沢","麻亜紗","ナリサワ","マアサ","19901005","1850002","東京都","国分寺市","東戸倉","3-452","4582690017698453","0928","354","NARISAWA","MAASA","pluses-clumpy04@icloud.com","ceqd2raAhBck","08082136279","柳原","江茉","ヤナギハラ","エマ","19910402","1900172","東京都","あきる野市","深沢","2-375","4582690017253457","0928","929","YANAGIHARA","EMA","victory.07.bound@icloud.com","EUVYksr5A2NH","09043789481","利光","尊","トシミツ","ミコト","19900312","1620831","東京都","新宿区","横寺町","3-360","4582690016021160","0928","753","TOSHIMITSU","MIKOTO","thy.zeros0t@icloud.com","XLSJfXw5GVFE","08013523908","河南","加寿希","コウナン","カズキ","19971110","2040002","東京都","清瀬市","旭が丘","3-183","4582690004929853","0528","016","KONAN","KAZUKI","tokamak-weekday-0b@icloud.com","q7rP2QDinjQS","08084440113","笠原","波音","カサハラ","ナミネ","19920714","1130024","東京都","文京区","西片","4-217","4582690008436566","0528","051","KASAHARA","NAMINE","splice.weekend0z@icloud.com","FA4C7btXNehx","08095231235","飯野","栞那","イイノ","カンナ","19980724","1970013","東京都","福生市","武蔵野台","1-309","4582690008154565","0528","411","IINO","KANNA","putrid.gibbons.0a@icloud.com","4WgSVUGzK6Lt","09089245446","鹿毛","涼","カゲ","リョウ","19911017","1800004","東京都","武蔵野市","吉祥寺本町","3-276","4582690011361488","0528","688","KAGE","RYO","poetess.layup0w@icloud.com","wdmqk8EhPhjn","08025970274","仁平","菜都芽","ジンペイ","ナツメ","19990424","1760004","東京都","練馬区","小竹町","4-79","4582690010022487","0528","558","JIMPEI","NATSUME","prion_zen.0r@icloud.com","MgbCq8hHPTkU","08084738151","小柴","百々華","コシバ","モモカ","19921021","1950075","東京都","町田市","山崎","4-148","4582690011395924","0528","256","KOSHIBA","MOMOKA","puffin.timbre-0r@icloud.com","E29Et9G9uaTm","08081466662","安芸","秋緒","アキ","アキオ","19980404","1160001","東京都","荒川区","町屋","2-4","4582690011355423","0528","813","AKI","AKIO","pecan.lobby.0n@icloud.com","sVzfLBjfzVH1","08013880519","前畑","海","マエハタ","ウミ","19970716","1970823","東京都","あきる野市","野辺","1-110","4582690011810898","0528","202","MAEHATA","UMI","unison_mineral_0o@icloud.com","2ikJSu4zeP65","08095087164","矢野","奈央","ヤノ","ナオ","19980106","1120014","東京都","文京区","関口","4-133","4582690008274983","0528","454","YANO","NAO","shader_based0p@icloud.com","tUKkhtR8jUVn","08082126163","岩間","沙也加","イワマ","サヤカ","19950312","1230873","東京都","足立区","扇","3-96","4582690011986680","0528","953","IWAMA","SAYAKA"];
if(document.URL.indexOf("https://l-tike.com/st1/97vmsbx56r22l16vwros/Tt/Tth160visitorlogin/index") != -1){
    var sheet = prompt("シートの行番号を入力");
    var num = Number(sheet) - 2;
    document.querySelectorAll("input")[0].value = datalist[(num * 18)];
    document.querySelectorAll("input")[1].value = datalist[(num * 18)];
    document.querySelectorAll("input")[2].value = datalist[(num * 18) + 2];
    document.querySelectorAll("input")[3].value = datalist[(num * 18) + 2];
    document.querySelectorAll("input")[4].click();
}
if(document.URL.indexOf("https://l-tike.com/st1res/97vmsbx56r22l16vwros/Tt/Tth100lottakepayment/index") != -1){
    var sheet = prompt("シートの行番号を入力");
    var num = Number(sheet) - 2;
    var pass = (Math.floor(Math.random() * 9000) + 1000);
    document.querySelectorAll("input")[6].value = pass;
    document.querySelectorAll("input")[7].value = pass;
    document.querySelectorAll("input")[8].value = datalist[(num * 18) + 2];
    document.querySelectorAll("input")[9].value = datalist[(num * 18) + 2];
    document.querySelectorAll("input")[10].value = datalist[(num * 18) + 3];
    document.querySelectorAll("input")[11].value = datalist[(num * 18) + 4];
    document.querySelectorAll("input")[12].value = datalist[(num * 18) + 5];
    document.querySelectorAll("input")[13].value = datalist[(num * 18) + 6];
    document.querySelectorAll("input")[14].value = datalist[(num * 18) + 7].slice(0,4);
    document.querySelectorAll("input")[15].value = datalist[(num * 18) + 7].slice(4,6);
    document.querySelectorAll("input")[16].value = datalist[(num * 18) + 7].slice(-2);
    document.querySelectorAll("input")[18].checked = true;
    document.querySelectorAll("input")[19].value = datalist[(num * 18) + 8];
    document.querySelectorAll("select")[0].value = datalist[(num * 18) + 9];
    document.querySelectorAll("input")[21].value = datalist[(num * 18) + 10] + datalist[(num * 18) + 11];
    document.querySelectorAll("input")[22].value = datalist[(num * 18) + 12];
    document.querySelectorAll("input")[33].value = datalist[(num * 18)];
    document.querySelectorAll("input")[34].click();
}
if(document.URL.indexOf("https://l-tike.com/st1res/97vmsbx56r22l16vwros/Tt/Tth110lotconfirm/regist") != -1){
    var sheet = prompt("シートの行番号を入力");
    var num = Number(sheet) - 2;
    document.querySelectorAll("input")[3].value = datalist[(num * 18) + 13];
    document.querySelectorAll("select")[0].value = datalist[(num * 18) + 14].slice(0,2);
    document.querySelectorAll("select")[1].value = "20" + datalist[(num * 18) + 14].slice(-2);
    document.querySelectorAll("input")[5].value = datalist[(num * 18) + 15];
    document.querySelectorAll("input")[6].click();
}
