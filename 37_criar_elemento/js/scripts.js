//outra possibilidade do JS e o DOM é criar elementos;
//o texto de um elemento é considerado um nó na árvore do DOM;
//ou seja, temos que criar o texto do elemento também


//inserir no body
var novoParagrafo = document.createElement("p")

var texto = document.createTextNode("Este é o conteúdo do novo paragráfo")

novoParagrafo.appendChild(texto)


var body = document.querySelector("body")

body.appendChild(novoParagrafo)

//inserir em um container

var container = document.getElementById("container")
var el = document.createElement('span')
el.appendChild(document.createTextNode("Texto do Span"))

container.appendChild(el)