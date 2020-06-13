import OrderWhitelist from '../infra/typeorm/entities/OrderWhitelist';

export default interface IUsersRepository {
  findWhiteListByCpf(cpf: string): Promise<OrderWhitelist | undefined>;
}
