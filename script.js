// Create a webpage with a 16x16 grid of square divs

//     Create the divs using JavaScript… don’t try making them by hand with copy and pasting in your html file!
const container = document.querySelector('#container');
let resetButton = document.getElementById('reset');
const squares = document.getElementsByClassName('div')
window.onload = drawGrid(16)
  function drawGrid(x) {
  for (let i = 0; i < (x ** 2); i++) {
    const divs = document.createElement('div');
    container.setAttribute('style', `grid-template-rows: repeat(${x}, 1.3em);
    grid-template-columns: repeat(${x}, 1.3em);`)
    divs.setAttribute(
      'style',
      'background-color: wheat; border: 1px solid black'
    );
    divs.classList = 'div';
    divs.id = 'div';
    container.appendChild(divs);
  }
}
function generateRandomColors () {
  let str = []
  for (let i = 0; i < 3; i++) {
    str.push(Math.floor(Math.random() * 255));
  }
  return(`background-color: rgb(${str})`)
}
function reset () {
  container.innerHTML = ''
}
function resize () {
  let newSize = prompt('Please enter a numeric value for a new size')
  newSize > 100 ? alert('please enter a anumber below 100'): drawGrid(newSize);
}


const allTheButtons = document.querySelector('nav')
allTheButtons.addEventListener('click', (x) => {
  if (x.target.id === 'reset') {
    reset();
    resize();
  }
  if (x.target.id === 'colorbutton') {
    container.addEventListener('mouseover', (e) => {
      if (e.target.id === 'div') {
        e.target.setAttribute('style', generateRandomColors())
      }
    })
  }
  if (x.target.id === 'black') {
    container.addEventListener('mouseover', (e) => {
      if (e.target.id === 'div') {
        e.target.setAttribute('style', 'background-color: black')
      }
    })
  }
  if (x.target.id === 'shady') {
    container.addEventListener('mouseover', (e) => {
      if (e.target.id === 'div') {
        e.target.setAttribute('style', shadesOfBlack())
      }
    })
    //inkColor depends on the current color that's been used. If we have a 10% then add 10%
    //somehtingg like if (percent === 10%) {percent += 10}
    //therefore, we need to figure out what percentage do we currently have
    //hipotesis: try to change the gray from 10 to 100 just by going over it once
   
    function shadesOfBlack () {
    let percent = 10
    let rgbColor = `background-color: rgb(0, 0, 0, ${percent}%)`

    if (e.target.style.backgroundColor === 'rgb(0, 0, 0, 10%') {
      e.target.style.backgroundColor = 'rgb(0, 0, 0, 40%)'
    }
   
    }
   
  }
})
