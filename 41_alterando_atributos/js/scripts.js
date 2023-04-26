//podemos alterar os atributos via JS e DOM;
//por exemplo: alterar o atributo alt de uma imagem;
//ou até o src de uma imagem;
//todos os atributos podem ser alterados via JS


//adicionar atributo
var title = document.querySelector("#title")

//no (), primeiro o tipo de atributo, depois o nome 
title.setAttribute("class", "testando-atributo")

console.log(title)

var btn = document.querySelector("#btn")

btn.setAttribute("disabled", "disabled")


var subtitle = document.querySelector(".subtitle")

subtitle.setAttribute('id', "titulo-2")


//remover atributo

var lista = document.querySelector("#lista")

lista.removeAttribute("id")