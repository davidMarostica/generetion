const leia = require("readline-sync")

let nota1, nota2, media

nota1 = leia.questionFloat("Digite a primeira nota: ")
nota2 = leia.questionFloat("Digite a segunda nota: ")


//processamento
media = (nota1 + nota2) / 2

if (media >= 6){
    console.log("Parabéns, vc passou! " + media)
}
 else if (media >= 4 && media < 6){
     console.log("Você está de Recuperação! Sua média foi: " + media)
}
    
    else {
     console.log("Reprovado! Sua média foi: " + media)
}