import { inject, injectable } from 'inversify';
import { Connection, DeepPartial, getRepository, Repository } from 'typeorm';
import { IDENTIFIER } from '../../../../helpers/utilites/identifier';
import { Login } from '../../../../models/mysql/Login';

export interface IUsersDataAccess {

}

@injectable()
export class UsersDataAccess implements IUsersDataAccess {
  #usersManager!: Repository<Login>;

  constructor(
    @inject(IDENTIFIER.MYSQL_CONNECTION) private mysqlConnection: Connection,
  ) {
    this.#usersManager = this.mysqlConnection.getRepository(Login);
  }

  async createUser(payload: DeepPartial<Login>): Promise<Login | undefined> {
    try {
      const newUser = this.#usersManager.create(payload);
      await this.#usersManager.save(newUser);
      return newUser;
    } catch (e) {
      console.error(e);
      return;
    }
  }
}
