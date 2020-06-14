import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes';
import cashbackRouter from '@modules/orders/infra/http/routes/cashback.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/orders', ordersRouter);
routes.use('/cashback', cashbackRouter);

export default routes;
