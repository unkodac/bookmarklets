var form = document.createElement('form');
document.body.appendChild(form);
form.method = 'post';
form.action = 'https://va.pia.jp/toshikare2-24fc/entrance.jsp';
var input1 = document.createElement('input');
var input2 = document.createElement('input');
input1.type = 'hidden';
input1.name = 'acpt_no';
input1.value = '1235786979143327';
input2.type = 'hidden';
input2.name = 'slcd';
input2.value = 'VN386';
form.appendChild(input1);
form.appendChild(input2);
form.submit();
