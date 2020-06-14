import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import GetBuyerOrderStatusService from '@modules/orders/services/GetBuyerOrderStatusService';
import GetCashbackValueService from '@modules/orders/services/GetCashbackValueService';
import ListAllOrdersService from '@modules/orders/services/ListAllOrdersService';

interface IRequest {
  order_id: string;
  value: number;
  cpf: string;
  date: Date;
}

export default class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { order_id, cpf, date, value }: IRequest = request.body;
    const { user } = request;

    const createOrder = container.resolve(CreateOrderService);
    const getBuyerOrderStatus = container.resolve(GetBuyerOrderStatusService);
    const getCashbackValue = container.resolve(GetCashbackValueService);

    const { cashback_percentage, cashback_value } = getCashbackValue.execute({
      value,
    });

    const { status } = await getBuyerOrderStatus.execute({ cpf });

    const order = await createOrder.execute({
      order_id,
      cpf,
      user_id: user.id,
      value,
      cashback_value,
      cashback_percentage,
      status,
      date,
    });

    return response.json(order);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const { user } = request;

    const listAllOrders = container.resolve(ListAllOrdersService);

    const orders = await listAllOrders.execute({
      user_id: user.id,
    });

    return response.json(orders);
  }
}
