import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

let fakeUserData: ICreateUserDTO;

describe('CreateUser', () => {
  beforeAll(() => {
    fakeUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      cpf: '00000000000',
      password: '123456',
    };
  });
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute(fakeUserData);

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('John Doe');
  });

  it('should not be able to create a new user with a email that already is use', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createUser.execute(fakeUserData);

    await expect(createUser.execute(fakeUserData)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
