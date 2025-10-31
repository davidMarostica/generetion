const leia = require("readline-sync"); // Importa o módulo readline-sync para entrada de dados
    
   
    // Variável de controle para o loop while
let continua = true; // Variável de controle para o loop while
let numero1, numero2,numero3, resultado; // Declaração das variáveis para os números e o resultado
    // Processamento
  // Loop para solicitar os números e calcular o resultado enquanto o usuário desejar
while (continua) { // Início do loop while que continuará enquanto 'continua' for verdadeiro

    numero1 = leia.questionInt("Digite primeiro valor: ");  // Solicita o primeiro número ao usuário

    numero2 = leia.questionInt("Digite segundo valor: "); // Solicita o segundo número ao usuário
    
    numero3 = leia.questionInt("Digite Terceiro valor: "); // Solicita o terceiro número ao usuário

    resultado = (numero1 + numero2 )* numero3; // Calcula o resultado da expressão (numero1 + numero2) * numero3

    console.log("O resultado  é: " + resultado); // Exibe o resultado da expressão no console

    console.log("\n++++++++++++++++MENU++++++++++++++++++"); // Exibe um menu para o usuário
    continua = leia.keyInYNStrict("\nDeseja continuar? "); // Pergunta ao usuário se deseja continuar (Y/N) e atualiza a variável 'continua'
    console.log("++++++++++++++++++++++++++++++++++"); // Exibe uma linha de separação no console
}
    // Saída
console.log("Programa encerrado. Obrigado por usar!"); // Mensagem final indicando que o programa foi encerrado