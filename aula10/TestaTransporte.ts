import { Aereo } from "./Aereo";
import { Aquatico } from "./Aquatico";
import { Automovel } from "./Automovel";

export function main() {
  const carro: Automovel = new Automovel(
    5, // capacidade
    4, // numeroRodas
    250.0, // velocidade
    "Verde", // cor
    4, // numeroPortas
    "EBN-0301", // placa
    0, // marcha
    "BMW" // marca
  ); // cria o objeto aut1 da classe Automovel

  const biki: Automovel = new Automovel(
    2, // capacidade
    0, // numeroRodas
    50.0, // velocidade
    "Verde", // cor
    0, // numeroPortas
    "", // placa
    1, // marcha
    "Calói" // marca
  ); // cria o objeto aut1 da classe Automovel

  const Avião: Aereo = new Aereo(
    180, // capacidade
    6, // numeroRodas
    900.0, // velocidade
    12000.0 // alturaMaxima
  ); // cria o objeto aut1 da classe Aereo

  const Barco: Aquatico = new Aquatico(
    8, // capacidade
    "Motor", // tipoPropulsao
    10.0, // comprimento
    2.5, // calado
    "Fibra" // material
  );

  carro.visualizar();
  console.log(" \nIsso é um carro:");
  biki.visualizar();
  console.log("\n Isso é uma bicicleta:");
  Avião.visualizar();
  console.log("\n Isso é um avião:");
  Barco.visualizar();
  console.log("\n Isso é um barco:");
} // fim do método
main();
