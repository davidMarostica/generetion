const leia = require("readline-sync");

let nomes = []; // Array para armazenar os nomes

for (let contador = 1; contador < 4; contador++) {     // Loop para 3 iterações
  let nome = leia.question("Digite um nome: "); // Solicita o nome ao usuário
  nomes.push(nome); // Adiciona o nome ao array
  console.log("O " + contador + "º nome digitado foi: " + nome);// Exibe o nome digitado
}

console.log("Os nomes foram todos digitados: " + nomes.join(", ")); // Exibe todos os nomes digitados
