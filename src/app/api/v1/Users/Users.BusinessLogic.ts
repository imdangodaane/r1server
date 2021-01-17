import { injectable, inject } from 'inversify';
import { DeepPartial } from 'typeorm';
import { Login } from '../../../../models/mysql/Login';
import { IUsersDataAccess } from './Users.DataAccess';
import { IDENTIFIER } from '../../../../helpers/utilites/identifier';

export interface IUsersBusinessLogic {
  createUser(payload: DeepPartial<Login>): Promise<Login | undefined>;
  isUserExisted(userid: string): Promise<boolean>;
}

@injectable()
export class UsersBusinessLogic implements IUsersBusinessLogic {
  constructor(
    @inject(IDENTIFIER.USERS_DATAACCESS) private usersDA: IUsersDataAccess,
  ) {

  }

  async isUserExisted(userid: string): Promise<boolean> {
    try {
      const user = await this.usersDA.findByUserid(userid);
      if (!user) return false;
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  async createUser(payload: DeepPartial<Login>): Promise<Login | undefined> {
    try {
      const newUser = await this.usersDA.createUser(payload);
      return newUser;
    } catch (e) {
      console.error(e);
      return;
    }
  }

}
