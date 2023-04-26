//podemos por um fim em setTimeout e setInterval por meio destes dois métodos;
//então após determinada condição os timers não serão mais executados;

var x = 0

var myTimer = setTimeout(function (){
    console.log( " o x é 0")
},1500)

x = 5

if(x > 0){
    clearTimeout(myTimer)
    console.log("o X passou de 0")
}


//clearInterval na prática

var myInterval = setInterval(function(){
    console.log("Imprimindo interval")
}, 500)

setTimeout(function(){
    console.log("não precisamos mais repetir!")
    clearInterval(myInterval)
},1500)