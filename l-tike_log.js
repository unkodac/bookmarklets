//申込ログ採取ツール[共用]

//使用者
var user = "高森";

//申込履歴要素抽出
var el = document.querySelectorAll("table td,th,p");
var j = el[2].outerText; //PCの場合5
var j_ = j.split('\n');
var kaijou = j_.join('');
var a = el[4].outerText; //PCの場合6
var a_ = a.split('\n');
var nichiji = a_.join('');
var b = el[10].outerText;
var b_ = b.split('\n');
var maisuu = b_.join('');
var c = el[14].outerText;
var c_ = c.split('\n');
var meado = c_.join('');
var d = el[16].outerText;
var d_ = d.split('\n');
var denwa = d_.join('');
var e = el[17].outerText;
var e_ = e.split('\n');
var uketori = e_.join('');
var f = el[20].outerText;
var f_ = f.split('\n');
var shiharai = f_.join('');
var g = el[23].outerText;
var g_ = g.split('\n');
var shimei = g_.join('');
var h = el[25].outerText;
var h_ = h.split('\n');
var shimei_kana = h_.join('');
var i = el[26].outerText;
var i_ = i.split('\n');
var pass = i_.join('');

//ファイル名(メアド+txt)
var text_n = [meado,'.txt'];
var text_name = text_n.join('');

//IPアドレス取得
var API_URL = 'https://api.ipify.org/?format=json';
var res = await fetch(API_URL);
var data = await res.json();

//日時取得
var date1 = new Date();
var date2 = date1.getFullYear() + "年" + (date1.getMonth() + 1)  + "月" + date1.getDate() + "日" + date1.getHours() + "時" + date1.getMinutes() + "分" + date1.getSeconds(); + "秒" + 

//ログ本体生成
array = ['会場:',kaijou,'\n','日時:',nichiji,'\n','枚数:',maisuu,'\n','メールアドレス:',meado,'\n','電話番号:',denwa,'\n','受取方法:',uketori,'\n',
         '支払方法:',shiharai,'\n','氏名:',shimei,'\n','氏名(カナ):',shimei_kana,'\n','パスワード:',pass,'\n','応募完了日時:',date2,'応募時IPアドレス:',data.ip,'応募者:',user];
var text = array.join('');

//ログをtxtファイルに保存
var blob = new Blob([text],{type:"text/plan"});
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = text_name;link.click();

//次画面へ
//setTimeout( function() {
//document.querySelector("[name=ENTRY_FIX]").click();
//}, 2000 ); //ファイル保存のポップアップによって次へ操作が無効化されるため2秒遅延
