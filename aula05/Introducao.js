"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World!");
// importa o módulo
var leia = require("readline-sync");
// Declaração de variáveis
var quantidade;
var altura;
var tipo;
var resposta;
var palavra;
quantidade = leia.questionInt("\nDigite um valor do tipo Inteiro: ", {
    limitMessage: "Digite um número inteiro",
});
console.log("O valor inteiro digitado foi: " + quantidade);
altura = leia.questionFloat("\nDigite um valor do tipo decimal: ", {
    limitMessage: "Digite um número decimal",
});
console.log("O valor decimal digitado foi: " + altura);
console.log("\nDigite um valor do tipo Char - um único caractere: ");
tipo = leia.keyIn();
console.log("O valor char digitado foi: " + tipo);
resposta = leia.keyInYNStrict("\nDigite um valor do tipo Boolean (S/N): ");
console.log("O valor boolean digitado foi: " + resposta);
palavra = leia.question("\nDigite um valor do tipo string: ");
console.log("O valor string digitado foi: " + palavra);
// Exibe os tipos das variáveis
console.log("\nTipos das variáveis:");
console.log("quantidade:", typeof quantidade);
console.log("altura:", typeof altura);
console.log("tipo:", typeof tipo);
console.log("resposta:", typeof resposta);
console.log("palavra:", typeof palavra);
