const button = document.querySelector("button");
const body = document.querySelector("body");
const color= ['red','blue', 'yellow','green','grey']

body.style.backgroundColor = 'violet';

button.addEventListener('click', changeBackground);

function changeBackground(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
}