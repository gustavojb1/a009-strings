const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

let troca =frase.replaceAll("verde","rosa")

troca=troca.replaceAll("azul","laranja")

let maiuscula= troca.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO CAIR")

console.log(troca)

console.log(maiuscula)