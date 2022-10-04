var form = document.createElement('form');
document.body.appendChild(form);
form.method = 'post';
form.action = 'https://www.funity.jp/tickets/deltama/showlist/'
var input = document.createElement('input');
input.type = 'hidden';
input.name = 'smd';
input.value = 'uXBeDdtKf4bjw';
form.appendChild(input);
form.submit();
