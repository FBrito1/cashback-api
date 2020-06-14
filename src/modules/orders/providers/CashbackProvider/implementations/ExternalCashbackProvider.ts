import ICashbackProvider from '../models/ICashbackProvider';
import axios, { AxiosResponse } from 'axios';

interface IResponse {
  statusCode: number;
  body: {
    credit: number;
  };
}

export default class ExternalCashbackProvider implements ICashbackProvider {
  private cashbackApiUrl: string | undefined = process.env.CASHBACK_API_URL;
  private cashbackApiToken: string | undefined = process.env.CASHBACK_API_TOKEN;

  public async getCashbackValueByCpf(cpf: string): Promise<number> {
    const apiResponse: AxiosResponse = await axios.get(
      `${this.cashbackApiUrl}?cpf=${cpf}`,
      {
        headers: {
          token: this.cashbackApiToken,
        },
      },
    );

    const payload: IResponse = apiResponse.data;

    return payload.body.credit;
  }
}
