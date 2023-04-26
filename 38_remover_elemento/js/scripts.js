//remover elementos também é muito fácil com JS
//temos como remover o elemento diretamente e também um elemento filho

//removendo elemento filho
var container = document.querySelector("#container")
var p = document.querySelector("#container p")

container.removeChild(p)


//remover o elemento pai
var subtitle = document.querySelector(".subtitle")

subtitle.remove()