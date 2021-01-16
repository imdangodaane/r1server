import { HandlerDecorations, Lifecycle, Request, ResponseToolkit } from '@hapi/hapi';
import { inject, injectable } from 'inversify';
import { Connection, Repository } from 'typeorm';
import { IDENTIFIER } from '../../../../helpers/utilites/identifier';
import { IUsersBusinessLogic } from './Users.BusinessLogic';
import { Login } from '../../../../models/mysql/Login';

export interface IUsersController {
  createUser(): Lifecycle.Method | HandlerDecorations;
  retrieveUsers(): Lifecycle.Method | HandlerDecorations;
  retrieveUser(): Lifecycle.Method | HandlerDecorations;
  modifyUser(): Lifecycle.Method | HandlerDecorations;
  removeUser(): Lifecycle.Method | HandlerDecorations;
}

@injectable()
export class UsersController implements IUsersController {
  loginManager: Repository<Login>;

  constructor(
    @inject(IDENTIFIER.USERS_BUSINESSLOGIC) private usersBL: IUsersBusinessLogic,
    @inject(IDENTIFIER.MYSQL_CONNECTION) private mysqlConnection: Connection,
  ) {
    this.loginManager = this.mysqlConnection.getRepository(Login);
  }

  public createUser() {
    return async (request: Request, h: ResponseToolkit) => {
      return h.response('Users: Create');
    };
  }

  public retrieveUsers() {
    return async (request: Request, h: ResponseToolkit) => {
      const users = await this.loginManager.find();
      console.log(users);
      return h.response('Users: Retrieve');
    };
  }

  public retrieveUser() {
    return async (request: Request, h: ResponseToolkit) => {
      return h.response('Users Retrieve one');
    };
  }

  public modifyUser() {
    return async (request: Request, h: ResponseToolkit) => {
      return h.response('Users: Modify user');
    };
  }

  public removeUser() {
    return async (request: Request, h: ResponseToolkit) => {
      return h.response('Users: Remove');
    };
  }
}
