//podemos também trocar um elemento DOM;
//ou seja, substituir uma tag por outra e de modo bem fácil;

//criar elemento
var el = document.createElement('h3')

el.classList = "testando-classe"

var texto = document.createTextNode("Este é o texto do h3")

el.appendChild(texto)

console.log(el)

//selecionar o elemento que quero trocar

var title= document.querySelector('#title')
console.log(title)

//selecionar o pai do el


var pai = title.parentNode;

//trocar elementos

//dentro do (), primeiro o elemento que vai ser adicionado, depois o elemento que vai sair 
pai.replaceChild(el,title)