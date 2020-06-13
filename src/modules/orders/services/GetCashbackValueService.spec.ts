import AppError from '@shared/errors/AppError';

import GetCashbackValueService from './GetCashbackValueService';

describe('GetCashbackValue', () => {
  it('should be able to get cashback correct values for 900(value) buy', async () => {
    const getCashbackValueService = new GetCashbackValueService();

    const value = 900;

    const cashbackData = getCashbackValueService.execute({
      value,
    });

    expect(cashbackData.cashback_percentage).toBe(10);
    expect(cashbackData.cashback_value).toBe(90);
  });

  it('should be able to get cashback correct values for 1300(value) buy', async () => {
    const getCashbackValueService = new GetCashbackValueService();

    const value = 1300;

    const cashbackData = getCashbackValueService.execute({
      value,
    });

    expect(cashbackData.cashback_percentage).toBe(15);
    expect(cashbackData.cashback_value).toBe(195);
  });

  it('should be able to get cashback correct values for 1600(value) buy', async () => {
    const getCashbackValueService = new GetCashbackValueService();

    const value = 1600;

    const cashbackData = getCashbackValueService.execute({
      value,
    });

    expect(cashbackData.cashback_percentage).toBe(20);
    expect(cashbackData.cashback_value).toBe(320);
  });
});
