import Order from '../infra/typeorm/entities/Order';
import ICreateOrderDto from '../dtos/ICreateOrderDto';

export default interface IUsersRepository {
  create(data: Omit<ICreateOrderDto, 'cpf'>): Promise<Order>;
  findOrderById(order_id: string): Promise<Order | undefined>;
}
