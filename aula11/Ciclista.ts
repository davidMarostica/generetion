import { Atleta } from "./Atleta";

export class Ciclista extends Atleta {
  constructor(nome: string) {
    super(nome);
  }

  public aquecer(): void {
    console.log(
      "Estou fazendo alongamentos e pedalando devagar antes de correr."
    );
  }
  public pedalar(): void {
    console.log("Estou pedalando!");
  }
}
