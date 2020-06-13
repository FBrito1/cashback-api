import Order from '../infra/typeorm/entities/Order';
import ICreateOrderDto from '../dtos/ICreateOrderDto';

export default interface IUsersRepository {
  create(data: ICreateOrderDto): Promise<Order>;
  findOrderById(order_id: string): Promise<Order | undefined>;
}
