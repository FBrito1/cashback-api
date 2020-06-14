import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import FakeCashbackProvider from '@modules/orders/providers/CashbackProvider/fakes/FakeCashbackProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import GetAccumulatedCashbackValueService from './GetAccumulatedCashbackValueService';

let fakeCashbackProvider: FakeCashbackProvider;
let fakeUsersRepository: FakeUsersRepository;

describe('GetAccumulatedCashbackValue', () => {
  beforeEach(() => {
    fakeCashbackProvider = new FakeCashbackProvider();
    fakeUsersRepository = new FakeUsersRepository();
  });

  it('should be able to return the acccumulated cashback value by cpf', async () => {
    const getAccumulatedCashbackValue = new GetAccumulatedCashbackValueService(
      fakeCashbackProvider,
      fakeUsersRepository,
    );

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@example.com',
      cpf: '00000000000',
      password: '123456',
    });

    const cashbackvalue = await getAccumulatedCashbackValue.execute({
      user_id: user.id,
    });

    expect(cashbackvalue).toEqual(2200);
  });

  it('should not be able to return the cashback value if the user not exists', async () => {
    const getAccumulatedCashbackValue = new GetAccumulatedCashbackValueService(
      fakeCashbackProvider,
      fakeUsersRepository,
    );

    expect(
      getAccumulatedCashbackValue.execute({
        user_id: 'non-existing-user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
