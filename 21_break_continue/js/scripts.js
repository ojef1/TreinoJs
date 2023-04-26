//com break podemos encerrar uma instrução
//com o continue podemos pular uma execução
//utilizados na maioria das vezes em loops

for(var i = 10;i > 0;i--){

    console.log(i)

    if(i === 5){
        break;
    }

}

console.log("deu um break")

x = 10

while (x <100){
    x+=10

    if(x === 60 || x === 90){
        console.log("continue")
        continue;
    }
    console.log("testando continue " + x)
    
}