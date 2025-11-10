import { Ciclista } from "./Ciclista";
import { Nadador } from "./Nadador";

export function main() {
  const nadador: Nadador = new Nadador("Michael Phelps");
  const ciclista: Ciclista = new Ciclista("Lance Armstrong");

  nadador.visualizar();
  nadador.aquecer();
  nadador.nadar();

  console.log("\n");
  ciclista.visualizar();
  ciclista.aquecer();
  ciclista.pedalar();
}

main();
