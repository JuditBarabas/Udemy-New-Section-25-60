const helloBtn = document.querySelector('#hello');
const byeBtn = document.querySelector('#goodbye');

helloBtn.addEventListener('click', () => console.log('hello'));
byeBtn.addEventListener('click', () => console.log('goodbye'));