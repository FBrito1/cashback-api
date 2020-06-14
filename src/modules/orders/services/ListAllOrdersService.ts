import { injectable, inject } from 'tsyringe';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';

import Order from '@modules/orders/infra/typeorm/entities/Order';

interface IRequest {
  user_id: string;
}

@injectable()
export default class GetBuyerOrderStatusService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Order[]> {
    return this.ordersRepository.findAllOrdersByUserId(user_id);
  }
}
