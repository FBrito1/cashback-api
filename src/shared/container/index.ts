import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import OrderWhitelistRepository from '@modules/orders/infra/typeorm/repositories/OrderWhitelistRepository';
import IOrdersWhitelistRepository from '@modules/orders/repositories/IOrdersWhitelistRepository';

import OrdersRepository from '@modules/orders/infra/typeorm/repositories/OrdersRepository';
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);

container.registerSingleton<IOrdersWhitelistRepository>(
  'OrdersWhitelistRepository',
  OrderWhitelistRepository,
);
