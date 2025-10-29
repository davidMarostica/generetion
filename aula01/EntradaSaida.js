/*
1. Solicita o nome → armazena em `nome`
2. Solicita a distância → armazena em `distancia`
3. Exibe uma saudação com os dados recebidos
*/
// importando a biblioteca readline-sync

const leia = require('readline-sync')

// declarando as variáveis
let nome, distancia 

// Entrada de dados
console.log("Digite o seu nome: ")
nome = leia.question() // lendo o nome do usuário

console.log("\nDigite a distância percorrida em sua corrida: ")
distancia = leia.questionFloat() // lendo a distância em metros

// exibindo os valores lidos, saida de dados
console.log("\n-Bom dia, " + nome + "!")
console.log("Nome: " + nome)
console.log("\nA distância percorrida foi de: " + distancia + " Km")