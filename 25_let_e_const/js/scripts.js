//utilizando let e const podemos criar escopo até em instruções como if
//deixando o código mais confiável
//separando cada bloco em um escopo

let x = 5 // var x = 5

const y = 10 // valor constante
//não se permite ser alterado

x = 12

console.log(x)
console.log(y)

if(true){
    //let e const definido dentro do loop, não altera o escopo global
    let x = 20

    console.log(x)

    const y = 50

    console.log('const if ' + y)
}


console.log(x)


if(20 > 10){
    const y = 100
    console.log('const if 3 ' + y)
}

for (let x = 0; x < 10 ; x++){
    console.log(x)
}