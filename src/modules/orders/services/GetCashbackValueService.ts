import AppError from '@shared/errors/AppError';

interface IRequest {
  value: number;
}

interface IResponse {
  cashback_value: number;
  cashback_percentage: number;
}

export default class GetCashbackValueService {
  public execute({ value }: IRequest): IResponse {
    if (value > 0 && value < 1000) {
      return {
        cashback_value: (value * 10) / 100,
        cashback_percentage: 10,
      };
    }

    if (value >= 1000 && value <= 1500) {
      return {
        cashback_value: (value * 15) / 100,
        cashback_percentage: 15,
      };
    }

    if (value > 1500) {
      return {
        cashback_value: (value * 20) / 100,
        cashback_percentage: 20,
      };
    }

    throw new AppError('Invalid value.');
  }
}
