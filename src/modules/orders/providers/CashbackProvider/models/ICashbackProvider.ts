export default interface ICashbackProvider {
  getCashbackValueByCpf(cpf: string): Promise<number>;
}
