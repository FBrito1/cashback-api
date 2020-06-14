import { container } from 'tsyringe';

import ICashbackProvider from './CashbackProvider/models/ICashbackProvider';
import ExternalCashbackProvider from './CashbackProvider/implementations/ExternalCashbackProvider';

container.registerSingleton<ICashbackProvider>(
  'CashbackProvider',
  ExternalCashbackProvider,
);
