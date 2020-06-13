import { injectable, inject } from 'tsyringe';

import IOrdersWhitelistRepository from '@modules/orders/repositories/IOrdersWhitelistRepository';

import { OrderStatusEnum } from '../enums/OrderStatusEnum';

interface IRequest {
  cpf: string;
}

interface IResponse {
  status: OrderStatusEnum;
}

@injectable()
export default class GetBuyerOrderStatusService {
  constructor(
    @inject('OrdersWhitelistRepository')
    private ordersWhitelistRepository: IOrdersWhitelistRepository,
  ) {}

  public async execute({ cpf }: IRequest): Promise<IResponse> {
    const foundInWhitelist = await this.ordersWhitelistRepository.findWhiteListByCpf(
      cpf,
    );

    if (foundInWhitelist) {
      return {
        status: OrderStatusEnum.APROVADO,
      };
    }

    return {
      status: OrderStatusEnum.EM_VALIDACAO,
    };
  }
}
