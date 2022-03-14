//申込ログ採取ツール[共用]

//申込履歴要素抽出
var el = document.querySelectorAll("table td,th,p");
var a = el[6].outerText;
var a_ = a.split('\n');
var nichiji = a_.join('');
var b = el[11].outerText;
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
var j = el[5].outerText;
var j_ = j.split('\n');
var kaijou = j_.join('');

//ファイル名(メアド+txt)
var text_name = [meado,'.txt'];

//ログ本体生成
array = ['会場:',kaijou,'\n','日時:',nichiji,'\n','枚数:',maisuu,'\n','メールアドレス:',meado,'\n','電話番号:',denwa,'\n','受取方法:',uketori,'\n','支払方法:',shiharai,'\n','氏名:',shimei,'\n','氏名(カナ):',shimei_kana,'\n','パスワード:',pass,'\n'];
var text = array.join('');

//ログをtxtファイルに保存
var blob = new Blob([text],{type:"text/plan"});
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = text_name;link.click();

//次画面へ
document.querySelector("[name=ENTRY_FIX]").click();
