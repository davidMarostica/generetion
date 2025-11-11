import { converte } from "./Funcoes";

function main() {
  try {
    const resultado = converte("Voce é burro");
    console.log(resultado); // HELLO

    const resultado2 = converte(123);
    console.log(resultado2); // 123
  } catch (error) {
    console.error("Erro:", error);
  }
}

main();
