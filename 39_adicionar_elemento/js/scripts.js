//podemos inserir um elemento dentro de outro, por exemplo um paragráfo em uma div;
//isso é considerado como "acrescentar um filho" em JS;


//criar elemento
var el = document.createElement("div")

el.classList = "div-criada"

console.log(el)

var container = document.querySelector("#container")

//inserindo elemento filho
container.appendChild(el)

//insertBefore- insere antes de outro elemento
//no () vai primeiro o que será inserido, depois o elemento de referencia para ser inserido antes;
var el2 = document.createElement("div")

el2.classList = "divBefore"

var el3 = document.querySelector("#container .div-criada")

console.log(el3)

container.insertBefore(el2,el3)