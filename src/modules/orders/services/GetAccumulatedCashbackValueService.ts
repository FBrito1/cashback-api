import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICashbackProvider from '@modules/orders/providers/CashbackProvider/models/ICashbackProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

@injectable()
export default class GetAccumulatedCashbackValueService {
  constructor(
    @inject('CashbackProvider')
    private cashbackProvider: ICashbackProvider,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<number> {
    const foundUser = await this.usersRepository.findById(user_id);

    if (!foundUser) {
      throw new AppError('User not found.');
    }

    const cashbackAccumulatedValue = await this.cashbackProvider.getCashbackValueByCpf(
      foundUser.cpf,
    );

    return cashbackAccumulatedValue;
  }
}
