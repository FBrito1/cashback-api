import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IOrdersRepository from '../repositories/IOrdersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import { OrderStatusEnum } from '../enums/OrderStatusEnum';

import Order from '../infra/typeorm/entities/Order';

interface IRequest {
  order_id: string;
  value: number;
  user_id: string;
  cpf: string;
  cashback_percentage: number;
  cashback_value: number;
  status: OrderStatusEnum;
  date: Date;
}

@injectable()
export default class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    order_id,
    user_id,
    cpf,
    value,
    cashback_value,
    cashback_percentage,
    status,
    date,
  }: IRequest): Promise<Order> {
    const [foundUser, duplicateOrderId] = await Promise.all([
      this.usersRepository.findById(user_id),
      this.ordersRepository.findOrderById(order_id),
    ]);

    if (!foundUser) {
      throw new AppError('User not found.');
    }

    if (foundUser.cpf !== cpf) {
      throw new AppError('You only can create a order with the registered cpf');
    }

    if (duplicateOrderId) {
      throw new AppError('Order already registered');
    }

    const order = this.ordersRepository.create({
      order_id,
      user_id,
      value,
      cashback_value,
      cashback_percentage,
      status,
      date,
    });

    return order;
  }
}
