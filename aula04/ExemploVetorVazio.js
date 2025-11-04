const leia = require("readline-sync");

let vetorInteiros = new Array(5); //tamanho máximo do vetor
//Entrada de Info
for (let indice = 0; indice < 5; indice++) {
  vetorInteiros[indice] = leia.questionInt(`Digite o numero ${indice + 1}:`);
  // vetor[0] = 5
  // vetor[1] = 9
}

// Saída
console.log("\nOs números digitados foram: \n");

for (let indice = 0; indice < 5; indice++) {
  console.log(`${indice + 1}º número: ${vetorInteiros[indice]}`);
}
