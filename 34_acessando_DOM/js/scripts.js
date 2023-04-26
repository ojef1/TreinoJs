//Acessar o DOM caracteriza-se por indentificar um elemento do HTML através de métodos;
//depois podemos manipulá-los da forma que quisermos;
//Acessar o DOM é semelhante as regras de CSS;
//podemos acessar por : tags, ids, classes;


//tag
var titulo = document.getElementsByTagName('h1')[0]

console.log(titulo)

var lis = document.getElementsByTagName('li')
console.log(lis)

//id  
var paragrafo = document.getElementById('paragrafo')
console.log(paragrafo)


//class

var itensDaLista = document.getElementsByClassName('item')
console.log(itensDaLista)