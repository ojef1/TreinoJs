// como você pode perceber muitos tipos de dados tem métodos e propriedades;
//Podemos criar também os nossos objetos com propriedades e métodos para auxiliar nos nossos programas;


let pessoa = {
    nome: "jefferson",
    idade: 20,

    falar:function(){
        console.log("Olá, Tudo bem?")
    },
    soma: function(a,b){
        return a + b
    }
}
console.log(pessoa.nome)
pessoa.falar()

var soma = pessoa.soma(2,2)

console.log(soma)