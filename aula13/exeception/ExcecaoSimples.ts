export class ExcecaoSimples extends Error {
  constructor(message: string) {
    super(message); //Correto: passar a mensagem para a classe pai
    this.name = "Exceção Simples";
  }
}
