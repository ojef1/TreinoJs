//o objeto Number, pai dos números, contém métodos muito úteis para trabalhar com números em JS
//a maioria dos tipos de dado também tem um objeto pai, como : String, Object e Array.

//parseFloat 10.0

console.log(parseFloat("12.999"))
console.log(Number.parseFloat("12.999"))

//parseInt

console.log(parseInt('10'))
console.log(parseInt(16.96))

//toFixed

console.log(23.99.toFixed(1))

//isNaN

console.log(isNaN('teste'))
console.log(isNaN(12))
console.log(isNaN('14'))

//MAX_VALUE e MIN_VALUE

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log(2.7976931348623157e+308)