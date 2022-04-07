const pagina = document.querySelector("#body");
pagina.style.cssText = "margin: 0px;";

/* const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content)

const pRed = document.createElement('p')
pRed.style.cssText = "color: red;"
pRed.textContent = "Hey, I'm Red!"
container.appendChild(pRed)

const h3Blue = document.createElement('h3')
h3Blue.style.cssText = "color: blue;"
h3Blue.textContent = "I'm a blue h3!"
container.appendChild(h3Blue)

const divBlack = document.createElement('div')
divBlack.style.cssText = "border: 1px solid black; background-color: pink;"
container.appendChild(divBlack)

const h1Div = document.createElement('h1')
h1Div.style.cssText = "color: blue;"
h1Div.textContent = "I'm in a div!"
divBlack.appendChild(h1Div)

const p1 = document.createElement('p')
p1.textContent = "ME TOO!"
divBlack.appendChild(p1) */

const boton = document.querySelector("#boton");
boton.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    console.log(button.id);
  });
})
