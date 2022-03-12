//ローチケメアド電話番号自動入力[共用]

//const ketasuu = 10; //メアドの桁数を指定
const ketasuu = Math.floor(Math.random()*Math.floor(6));

document.forms.ttg160.elements.MAIL_ADDRS.value=document.forms.ttg160.elements.MAIL_ADDRS_CONFIRM.value= Math.random().toString(36).slice(-1*(ketasuu+5))+"@qrnail.com";
document.forms.ttg160.elements.TEL.value=document.forms.ttg160.elements.TEL_CONFIRM.value="0"+(Math.floor(Math.random()*Math.floor(3))+7)+"0"+(Math.floor(Math.random()*Math.floor(80000000))+10000000);

document.querySelector("[name=NEXT]").click(); //次ページへ
