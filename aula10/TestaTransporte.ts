import { Automovel } from "./Automovel";

export function main() {
  const aut1: Automovel = new Automovel(
    5, // capacidade
    4, // numeroRodas
    250.0, // velocidade
    "Verde", // cor
    4, // numeroPortas
    "EBN-0301", // placa
    0, // marcha
    "BMW" // marca
  ); // cria o objeto aut1 da classe Automovel

  aut1.visualizar();

  const aut2: Automovel = new Automovel(
    2, // capacidade
    0, // numeroRodas
    50.0, // velocidade
    "Verde", // cor
    0, // numeroPortas
    "", // placa
    1, // marcha
    "Calói" // marca
  ); // cria o objeto aut1 da classe Automovel

  aut2.visualizar();
}

main();
