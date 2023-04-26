//o click é ativado quando o usuário clica em um elemento em que atrelamos o evento;
//após a ação podemos fazer as modificações e alterações no HTML/CSS que quisermos;



//inserir o click
var btn = document.querySelector("#btn")

console.log(btn)

btn.addEventListener("click", function(){
    console.log("Clicou")

    console.log(this)

    this.style.color='red'
})


//click afetando outros elementos;
var title = document.querySelector("#title")

title.addEventListener('click', function(){
    var subtitle = document.querySelector(".subtitle")

    subtitle.style.display = 'none'
})

var subtitle = document.querySelector(".subtitle")

subtitle.addEventListener("dblclick", function(){
    console.log("clique duplo!")
})