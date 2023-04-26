//estas estruturas servem para repetir N vezes uma operação
//por exemplo: repetir uma determinada logica em cada elemento de um array
//as estruturas mais comum são while e for
//obs : cuidado com loop infinito

//o while é a estrutura de repetição mais simples
//a ideia é que se repita algo até atingir tal condição
//while -> enquanto

var x = 0

while(x <= 5 ){
    console.log("testando repetição " + x)
    x++ //incrementador
}

var arr = ["teste", "testando ", "a", "b"]
y = 0


while (y <=3){
    console.log(arr[y])
    y++
}

var palavra = "jefferson"
var i = 0
while (i <= 9){
    console.log(palavra[i])
    i++
}