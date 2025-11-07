export class Transporte {
  private _capacidade: number; // atributo capacidade

  constructor(capacidade: number) {
    // construtor é um método especial para inicializar objetos como atributos.
    this._capacidade = capacidade;
  }
  //metodo de acesso get e set
  public get capacidade() {
    // método get para acessar o atributo privado
    return this._capacidade;
  }

  public set capacidade(novacapacidade: number) {
    // método set para alterar o atributo privado
    this._capacidade = novacapacidade; // altera o atributo capacidade
  }
  // método para visualizar os dados do meio de transporte
  public visualizar(): void {
    console.log(
      "\n\n************************************************************"
    );
    console.log("Dados do Meio de Transporte:");
    console.log(
      "****************************************************************"
    );
    console.log("Capacidade (número de passageiros): " + this._capacidade);
  }
}
