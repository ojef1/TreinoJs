//o evento é ativado quando uma tecla é pressionada;
//podemos também atrelar o evento keyup para quando uma tecla volta a posição normal;



//keydown
document.addEventListener("keydown",function(event){
    

    if(event.key === "Enter")
    console.log("Apertou Enter")
})


//keyup
document.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        console.log("Soltou o enter")
    }else{
        console.log(e.key)
    }
})