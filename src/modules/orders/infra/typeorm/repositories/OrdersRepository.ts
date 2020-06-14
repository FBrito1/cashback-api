import { getRepository, Repository } from 'typeorm';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDto from '@modules/orders/dtos/ICreateOrderDto';

import Order from '../entities/Order';

class OrderRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;
  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async findOrderById(order_id: string): Promise<Order | undefined> {
    return this.ormRepository.findOne(order_id);
  }

  public async findAllOrdersByUserId(user_id: string): Promise<Order[]> {
    return this.ormRepository.find({
      where: {
        user_id,
      },
    });
  }

  public async create({
    order_id,
    user_id,
    value,
    cashback_percentage,
    cashback_value,
    status,
  }: ICreateOrderDto): Promise<Order> {
    const order = this.ormRepository.create({
      order_id,
      user_id,
      value,
      cashback_percentage,
      cashback_value,
      status,
    });

    await this.ormRepository.save(order);

    return order;
  }
}

export default OrderRepository;
