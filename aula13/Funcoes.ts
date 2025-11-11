import { ExcecaoSimples } from "./exeception/ExcecaoSimples";

export function converte(valor: any): string {
  return String(valor).toUpperCase();
}

export function validarIdade(idade: number): void {
  if (idade < 18) {
    throw new Error("A Pessoa não está apta a dirigir!");
  } else {
    console.log("✅ A Pessoa está apta a dirigir!");
  }
}

export function dividir(numero1: number, numero2: number): number | null {
  if (numero2 == 0) throw new ExcecaoSimples("Não existe divisão por zero!");

  return numero1 / numero2;
}
