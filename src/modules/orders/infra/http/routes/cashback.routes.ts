import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CashbackController from '../controllers/CashbackController';

const cashbackRouter = Router();

const cashbackController = new CashbackController();

cashbackRouter.use(ensureAuthenticated);

cashbackRouter.get('/accumulated', cashbackController.show);

export default cashbackRouter;
