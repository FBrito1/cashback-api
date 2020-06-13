import { getRepository, Repository } from 'typeorm';

import IOrdersWhitelistRepository from '@modules/orders/repositories/IOrdersWhitelistRepository';

import OrderWhitelist from '../entities/OrderWhitelist';

class OrderWhitelistRepository implements IOrdersWhitelistRepository {
  private ormRepository: Repository<OrderWhitelist>;
  constructor() {
    this.ormRepository = getRepository(OrderWhitelist);
  }

  public async findWhiteListByCpf(
    cpf: string,
  ): Promise<OrderWhitelist | undefined> {
    return this.ormRepository.findOne({ where: { cpf } });
  }
}

export default OrderWhitelistRepository;
