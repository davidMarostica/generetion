import readline = require("readline-sync");
import { validarIdade } from "./Funcoes";

export function main() {
  let idade: number;
  let loop: boolean = true;

  console.log("VALIDAÇÃO DE IDADE PARA DIRIGIR\n");

  while (loop) {
    try {
      idade = readline.questionInt("Digite a idade (ou 0 para sair): ");

      if (idade === 0) {
        console.log("👋 Programa encerrado!");
        loop = false;
        break;
      }

      console.log(`\n--- Resultado para idade ${idade} ---`);
      validarIdade(idade);
    } catch (error: any) {
      console.error(`💥 ${error.message}`);
    }

    console.log("----------------------------------------\n");
  }
}

main();
