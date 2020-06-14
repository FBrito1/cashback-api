import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import OrdersController from '../controllers/OrdersController';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.use(ensureAuthenticated);

ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      order_id: Joi.string().min(1).required(),
      value: Joi.number().required().positive(),
      cpf: Joi.string().min(11).max(11).required(),
      date: Joi.date().required(),
    },
  }),
  ordersController.create,
);

ordersRouter.get('/', ordersController.list);

export default ordersRouter;
