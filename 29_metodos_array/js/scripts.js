//os arrays também possuem métodos
//facilitando a nossa vida para: adicionar e remover elementos, resgatar apenas uma parte do array e etc.

//length - conta quantos itens tem no array

var arr = [1,2,3,4,5]

console.log(arr.length)

//push - adiciona itens no array, no final

arr.push(6)
arr.push('qualquer coisa')

console.log(arr)

//pop - remove um item, do fim do array

arr.pop()
console.log(arr)

//unshift - adiciona o item no começo do array
arr.unshift(0)
arr.unshift('teste')

console.log(arr)

//shift - remove um item, do começo do array

arr.shift()

console.log(arr)

//acessar o último elemento 

console.log(arr[arr.length - 1])

//isArray - verifica se é um array

console.log(Array.isArray(5))

console.log(Array.isArray(arr))