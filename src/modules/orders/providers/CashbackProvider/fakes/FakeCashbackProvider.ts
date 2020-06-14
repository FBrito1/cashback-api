import ICashbackProvider from '../models/ICashbackProvider';

export default class FakeCashbackProvider implements ICashbackProvider {
  public async getCashbackValueByCpf(cpf: string): Promise<number> {
    return 2200;
  }
}
