import { getRepository, Repository } from 'typeorm';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDto from '@modules/orders/dtos/ICreateOrderDto';

import Order from '../entities/Order';

class OrderWhitelistRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;
  constructor() {
    this.ormRepository = getRepository(Order);
  }
}

export default OrderWhitelistRepository;
