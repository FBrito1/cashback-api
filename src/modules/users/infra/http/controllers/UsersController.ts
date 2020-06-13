import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, password }: ICreateUserDTO = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      cpf,
      password,
    });

    delete user.password;

    return response.json(user);
  }
}
