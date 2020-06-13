import { Router } from 'express';
// import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
// import usersRouter from '@modules/users/infra/http/routes/users.routes';
// import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
// import passwordRouter from '@modules/users/infra/http/routes/password.routes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    ok: true,
  });
});

export default routes;
