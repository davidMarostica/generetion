import { Transporte } from "./Tranporte";

export class Aereo extends Transporte {
  private _numeroRodas: number;
  private _velocidade: number;
  private _alturaMaxima: number;

  constructor(
    capacidade: number,
    numeroRodas: number,
    velocidade: number,
    alturaMaxima: number
  ) {
    super(capacidade);
    this._numeroRodas = numeroRodas;
    this._velocidade = velocidade;
    this._alturaMaxima = alturaMaxima;
  }

  public get numeroRodas() {
    return this._numeroRodas;
  }

  public set numeroRodas(numeroRodas: number) {
    this._numeroRodas = numeroRodas;
  }

  public get velocidade() {
    return this._velocidade;
  }

  public set velocidade(velocidade: number) {
    this._velocidade = velocidade;
  }
  public get alturaMaxima() {
    return this._alturaMaxima;
  }

  public set alturaMaxima(autura: number) {
    this._alturaMaxima = autura;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Avião");
    console.log("Número de rodas: " + this.numeroRodas);
    console.log("Velocidade: " + this.velocidade.toFixed(2));
    console.log("Altura Máxima: " + this.alturaMaxima.toFixed(2));
  }
}
