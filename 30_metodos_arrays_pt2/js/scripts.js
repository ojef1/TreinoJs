//Podemos também resgatar um conjunto de elementos com os métodos
//indetificar o índice de um elemento específico em muito mais

//Splice - adiciona ou remove elementos em qualquer lugar do array
/*a sequencia nos () são : 
1. indice onde vai entrar o elemento
2. quantos elementos vão ser apagados
3. qual elemento vai ser adicionado */

var arr = [1,2,3,4,5]
//adicionar
arr.splice(2,0,999)

console.log(arr)

//remover
arr.splice(4,1)

console.log(arr)


//IndexOf - mostra qual elemento está em determinado indice

console.log(arr.indexOf(5))


//Join - transfora arrays em string
//dentro do () vai o elemento que vai separar um elemento do outro, nesse exemplo será um espaço

var arr2 = ["o","rato","roeu","a","roupa"]

console.log(arr2.join(" "))



//Reverse - inverter o array
//Inverte a ordem de leitura da direta para a esquerda

console.log(arr2.reverse())