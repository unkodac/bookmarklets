//ローチケメアド電話番号自動入力[共用]

document.forms.ttg160.elements.MAIL_ADDRS.value=document.forms.ttg160.elements.MAIL_ADDRS_CONFIRM.value= Math.random().toString(36).slice(-9)+"@biglode.jp";
document.forms.ttg160.elements.TEL.value=document.forms.ttg160.elements.TEL_CONFIRM.value="080"+(Math.floor(Math.random()*Math.floor(80000000))+10000000);
document.querySelector("[name=NEXT]").click();
