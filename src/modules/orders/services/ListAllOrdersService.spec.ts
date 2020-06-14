import 'reflect-metadata';
import FakeOrdersRepostiory from '@modules/orders/repositories/fakes/FakeOrdersRepostiory';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import ListAllOrdersService from './ListAllOrdersService';

import { OrderStatusEnum } from '@modules/orders/enums/OrderStatusEnum';

let fakeOrdersRepostiory: FakeOrdersRepostiory;
let fakeUsersRepository: FakeUsersRepository;

describe('ListAllOrders', () => {
  beforeEach(() => {
    fakeOrdersRepostiory = new FakeOrdersRepostiory();
    fakeUsersRepository = new FakeUsersRepository();
  });

  it('should be able to return the list of orders', async () => {
    const listAllOrders = new ListAllOrdersService(fakeOrdersRepostiory);

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@example.com',
      cpf: '00000000000',
      password: '123456',
    });

    const order1 = await fakeOrdersRepostiory.create({
      order_id: '1',
      user_id: user.id,
      cpf: '00000000000',
      value: 1000,
      cashback_percentage: 10,
      cashback_value: 100,
      date: new Date(),
      status: OrderStatusEnum.EM_VALIDACAO,
    });

    const order2 = await fakeOrdersRepostiory.create({
      order_id: '2',
      user_id: user.id,
      cpf: '00000000000',
      value: 1000,
      cashback_percentage: 10,
      cashback_value: 100,
      date: new Date(),
      status: OrderStatusEnum.EM_VALIDACAO,
    });

    const listOrders = await listAllOrders.execute({ user_id: user.id });

    expect(listOrders).toEqual([order1, order2]);
  });
});
