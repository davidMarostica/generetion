import { Conta } from "./Contas";

export function main() {
  const conta: Conta = new Conta(1, 123, 1, "David Aparecido Da Silva", 1000);
  conta.visualizar();
  conta.sacar(500);
  conta.visualizar();
  conta.depositar(1000);
  conta.visualizar();
}

main();
