//é muito comum alterar CSS com JS também;
//as regras de css ficam de forma inline;
//substituindo a maioria das outras regras criadas;

//seleciona o elemento
var title = document.querySelector('#title')

//adiciona o estilo
title.style.color = 'red'

//background-color -- palavras compostas se tornam uma só, retirar o ífen e adiciona o CamelCase;
title.style.backgroundColor = 'yellow'


//selecionar elemento
subtitle = document.querySelector('.subtitle')

//adicionar vários estilos

subtitle.style.cssText = "color: blue; background-color: pink; font-size: 50px;"