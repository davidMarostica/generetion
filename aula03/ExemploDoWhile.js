const leia = require("readline-sync");
 // Declaração das variáveis
let numero, resultado, contador = 3;
 // Processamento
do {
    // Entrada
    numero = leia.questionFloat("\nDigite um numero : ");
    // Cálculo
    resultado = numero * (4 + 6)* 5;

    console.log("\nO resultado da multiplicação é: " + resultado);
   // Incremento do contador
   contador++;
}while (contador <= 3);