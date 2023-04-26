//Com a evolução da linguagem foram criados dois seletores que acabam com a toda a complexidade desta ação;
//querySelector e querySelectorAll;
//com estes podemos acessar os elementos baseados em regras de CSS;


var itensClasse = document.getElementsByClassName('item')

console.log(itensClasse)

//querySelectorAll
var itensQuery = document.querySelectorAll('#lista2 li')

console.log(itensQuery)

var itensQuery2 = document.querySelectorAll('#lista .item')

console.log(itensQuery2)


//querySelector
var lista = document.querySelector('#lista')

console.log(lista)

var primeiraLista = document.querySelector('ul')

console.log(primeiraLista)


var span = document.querySelector('#paragrafo span')

console.log(span)