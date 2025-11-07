import { Transporte } from "./Tranporte";

export class Aquatico extends Transporte {
  private _tipoPropulsao: string; // ex: motor, vela, remo
  private _comprimento: number; // em metros
  private _calado: number; // profundidade submersa
  private _material: string; // ex: fibra, madeira, alumínio

  constructor(
    capacidade: number,
    tipoPropulsao: string,
    comprimento: number,
    calado: number,
    material: string
  ) {
    super(capacidade);
    this._tipoPropulsao = tipoPropulsao;
    this._comprimento = comprimento;
    this._calado = calado;
    this._material = material;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Tipo de propulsão: " + this._tipoPropulsao);
    console.log("Comprimento: " + this._comprimento + " m");
    console.log("Calado: " + this._calado + " m");
    console.log("Material: " + this._material);
  }
}
