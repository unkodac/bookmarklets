//申込ログ採取ツール[共用]

//申込履歴要素抽出
var el = document.querySelectorAll("table td,th,p");
var nichiji = el[6].outerText;
var maisuu = el[11].outerText;
var meado = el[14].outerText;
var denwa = el[16].outerText;
var uketori = el[17].outerText;
var shiharai = el[20].outerText;
var shimei = el[23].outerText;
var shimei_kana = el[25].outerText;
var pass = el[26].outerText;

//ファイル名(メアド+txt)
var text_name = [meado,'.txt'];

//ログ本体生成
array = ['日時 : ',nichiji,'枚数',maisuu,'メールアドレス',meado,'電話番号',denwa,'受取方法',uketori,'支払方法',shiharai,'氏名',shimei,'氏名(カナ)',shimei_kana,'パスワード',pass];
var text = array.join('\n');

//ログをtxtファイルに保存
var blob = new Blob([text],{type:"text/plan"});
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = text_name;link.click();

//次画面へ
document.querySelector("[name=ENTRY_FIX]").click();
