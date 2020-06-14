import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetAccumulatedCashbackValueService from '@modules/orders/services/GetAccumulatedCashbackValueService';

export default class CashbackController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { user } = request;

    const getAccumulatedCashbackValue = container.resolve(
      GetAccumulatedCashbackValueService,
    );

    const cashbackValue = await getAccumulatedCashbackValue.execute({
      user_id: user.id,
    });

    return response.json({ cashbackValue });
  }
}
