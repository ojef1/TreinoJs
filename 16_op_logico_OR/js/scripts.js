//o operador lógico || é conhecido como OR
//ele retorna true caso uma das operações retorne verdadeiro
//o OR retorna false apenas se as duas expressões são falsas

var idade = 15
var nome = "joao"

if (nome =="joao" || idade >14){
    console.log("pode entrar na aula de esgrima")
}else{
    console.log("não pode entrar ")
}

if((nome == "pedro" || 30 > 20) && 10==10){
    console.log("testando")
}else{
    console.log("não entrou")
}