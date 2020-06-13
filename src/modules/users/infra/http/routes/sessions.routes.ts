import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';
import { celebrate, Segments, Joi } from 'celebrate';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(10).required(),
    },
  }),
  sessionsController.create,
);

export default sessionsRouter;
