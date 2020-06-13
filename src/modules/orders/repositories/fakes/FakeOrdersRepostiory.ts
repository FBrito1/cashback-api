import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDto from '@modules/orders/dtos/ICreateOrderDto';

import Order from '../../infra/typeorm/entities/Order';

class FakeOrdersRepository implements IOrdersRepository {
  private orders: Order[] = [];

  public async findOrderById(order_id: string): Promise<Order | undefined> {
    return this.orders.find(order => order.order_id === order_id);
  }

  public async create({
    order_id,
    value,
    cashback_percentage,
    cashback_value,
    status,
    user_id,
    date,
  }: ICreateOrderDto): Promise<Order> {
    const order = new Order();

    Object.assign(order, {
      order_id,
      value,
      cashback_percentage,
      cashback_value,
      status,
      user_id,
      date,
    });

    this.orders.push(order);

    return order;
  }
}

export default FakeOrdersRepository;
