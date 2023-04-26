//podemos alterar o texto de qualquer elemento de forma fácil com JS;
//posteriormente poderemos atrelar esta ação com algum evento;


//selecionar elemento
var title = document.querySelector('#title')
var subtitle = document.querySelector('.subtitle')

// innerHTML
title.innerHTML = "Testando o texto alterado!"

//textContent -> mais utilizado, recomendado e performático
subtitle.textContent = "Testando o textContent"