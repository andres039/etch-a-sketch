const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
const square = document.createElement('div');
square.classList.add('squares');
container.appendChild(square);
    }
}


const randomColor = `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)`


document.addEventListener(onmouseover,function(e) {
    e.target.style.background =  randomColor;
})