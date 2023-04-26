// Fora de escopos locais o this sempre se refere ao objeto global Window;
//Em objetos o this vai se referir a instância e pode acessar suas propriedades;

var teste = 5

console.log(this.teste)
console.log(teste)

let pessoa = {
    nome: "jefferson",
    idade: 20,

    falar:function(){
        console.log("Olá, Tudo bem?")
    },
    dizerNome: function(){
        console.log("O meu nome é: " + this.nome)
    },
    aniversario: function(){
        this.idade++
        //alterando valores
    },
    saudacao: function(){
        return 'Sr. '+ this.nome
    }
}

pessoa.dizerNome()
console.log(pessoa.idade) // idade antes de chamar o metodo aniversário

pessoa.aniversario() 
console.log(pessoa.idade)//idade apos chamar o metodo aniversário, foi somado mais 1 ano

var sdc = pessoa.saudacao()
console.log('Olá ' + sdc)