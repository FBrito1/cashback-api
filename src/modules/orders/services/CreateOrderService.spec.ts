import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeOrdersRepository from '@modules/orders/repositories/fakes/FakeOrdersRepostiory';

import CreateOrderService from './CreateOrderService';
import ICreateOrderDto from '../dtos/ICreateOrderDto';

import { OrderStatusEnum } from '../enums/OrderStatusEnum';

let fakeOrdersRepository: FakeOrdersRepository;
let fakeUsersRepository: FakeUsersRepository;

describe('CreateOrder', () => {
  beforeEach(() => {
    fakeOrdersRepository = new FakeOrdersRepository();
    fakeUsersRepository = new FakeUsersRepository();
  });

  it('should be able to create a new order', async () => {
    const createOrder = new CreateOrderService(
      fakeOrdersRepository,
      fakeUsersRepository,
    );

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@example.com',
      cpf: '00000000000',
      password: '123456',
    });

    const fakeOrderData: ICreateOrderDto = {
      order_id: '1',
      user_id: user.id,
      value: 1000,
      cashback_percentage: 10,
      cashback_value: 100,
      date: new Date(),
      status: OrderStatusEnum.EM_VALIDACAO,
    };

    const order = await createOrder.execute(fakeOrderData);

    expect(order).toHaveProperty('order_id');
  });

  it('should not be able to create order if the user not exists', async () => {
    const createOrder = new CreateOrderService(
      fakeOrdersRepository,
      fakeUsersRepository,
    );

    const fakeOrderData: ICreateOrderDto = {
      order_id: '1',
      user_id: 'non-existing-user',
      value: 1000,
      cashback_percentage: 10,
      cashback_value: 100,
      date: new Date(),
      status: OrderStatusEnum.EM_VALIDACAO,
    };

    await expect(createOrder.execute(fakeOrderData)).rejects.toBeInstanceOf(
      AppError,
    );
  });

  it('should not be able to create a new order if the order_id already exists', async () => {
    const createOrder = new CreateOrderService(
      fakeOrdersRepository,
      fakeUsersRepository,
    );

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@example.com',
      cpf: '00000000000',
      password: '123456',
    });

    const fakeOrderData: ICreateOrderDto = {
      order_id: '1',
      user_id: user.id,
      value: 1000,
      cashback_percentage: 10,
      cashback_value: 100,
      date: new Date(),
      status: OrderStatusEnum.EM_VALIDACAO,
    };

    await createOrder.execute(fakeOrderData);

    await expect(createOrder.execute(fakeOrderData)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
