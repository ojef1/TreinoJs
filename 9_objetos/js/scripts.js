//funciona como array associativo de outras linguagens;
//podemos criar propriedades com chave e valor;
//a ideia é guardar um conjunto de valores para utilizar;

//as chaves {} determina que é um objeto
var obj = {
    nome: 'jefferson',
    idade:20,
    profissao:'programador',
    estaTrabalhando: true,
};
console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome);

obj.nome = "pedro";
console.log(obj.nome);
console.log(obj);

obj.graduacao = true;

console.log(obj);