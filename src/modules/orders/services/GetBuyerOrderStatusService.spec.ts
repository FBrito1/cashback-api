import 'reflect-metadata';
import FakeOrdersWhitelistRepository from '@modules/orders/repositories/fakes/FakeOrdersWhitelistRepository';

import GetBuyerOrderStatusService from './GetBuyerOrderStatusService';

import { OrderStatusEnum } from '../enums/OrderStatusEnum';

let fakeOrdersWhitelistRepository: FakeOrdersWhitelistRepository;

describe('GetBuyerStatus', () => {
  beforeEach(() => {
    fakeOrdersWhitelistRepository = new FakeOrdersWhitelistRepository();
  });

  it('should return correct status for cpf there exists in whitelist', async () => {
    const getBuyerOrderStatus = new GetBuyerOrderStatusService(
      fakeOrdersWhitelistRepository,
    );

    const cpf = '15350946055';

    const { status } = await getBuyerOrderStatus.execute({ cpf });

    expect(status).toBe(OrderStatusEnum.APROVADO);
  });

  it('should return correct status for cpf there not exists in whitelist', async () => {
    const getBuyerOrderStatus = new GetBuyerOrderStatusService(
      fakeOrdersWhitelistRepository,
    );

    const cpf = 'non-existing-cpf';

    const { status } = await getBuyerOrderStatus.execute({ cpf });

    expect(status).toBe(OrderStatusEnum.EM_VALIDACAO);
  });
});
