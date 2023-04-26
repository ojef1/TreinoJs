//arrays são considerados objetos em JS, porém serve como lista
//podemos ter itens de qualquer tipo de dado também
//porém não por chave e valor, e sim por indice


// obj => {} e array => []
var arr = [5,"Jefferson", true, {teste:1, teste:2}]; 
console.log(arr)

var arr2 = [2,3,4,5,6];
console.log(arr2);

console.log(arr[1]);
console.log(arr[0]);

arr[4] = [10]; 
//usando um indice que ainda não existe, se adiciona um item no array


arr [0] = 'teste'
//usando um indice existente, altera a informação do indice escolhido
console.log(arr);