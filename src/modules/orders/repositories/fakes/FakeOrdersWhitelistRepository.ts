import IOrdersWhitelistRepository from '@modules/orders/repositories/IOrdersWhitelistRepository';

import OrderWhitelist from '../../infra/typeorm/entities/OrderWhitelist';

class FakeOrdersWhitelistRepository implements IOrdersWhitelistRepository {
  private ordersWhitelist: OrderWhitelist[] = [
    {
      cpf: '15350946055',
      active: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  public async findWhiteListByCpf(
    cpf: string,
  ): Promise<OrderWhitelist | undefined> {
    return this.ordersWhitelist.find(orderWl => orderWl.cpf === cpf);
  }
}

export default FakeOrdersWhitelistRepository;
