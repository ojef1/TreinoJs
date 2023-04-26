//a função callback é um recurso muito interessante e também amplamente utilizado em js;
//permite executar uma função depois de uma determinada ação;
//conceito fundamental para enteder a parte assíncrona do JS;


function exibir(num){
    console.log("a operação resultou em : " + num)
}

function soma(a,b, callback){
    var op = a+b
    callback(op)
}

function mult (a,b, cb){
    var op = a * b
    cb(op)
}

soma (2,2, exibir)
mult (2,4, exibir)