import { Container } from 'inversify';
import { Connection } from 'typeorm';
import { IDENTIFIER } from '../../helpers/utilites/identifier';
import { IUsersBusinessLogic, UsersBusinessLogic } from '../api/v1/Users/Users.BusinessLogic';
import { IUsersController, UsersController } from '../api/v1/Users/Users.Controller';
import { IUsersRoutes, UsersRoutes } from '../api/v1/Users/Users.Routes';
import { IUsersDataAccess, UsersDataAccess } from '../api/v1/Users/Users.DataAccess';

export const createAppContainerV1 = (
  helperContainer: Container,
  // mongodbConnection: Connection,
  mysqlConnection: Connection,
): Container => {
  const container = new Container();

  container.bind<Connection>(IDENTIFIER.MYSQL_CONNECTION).toConstantValue(mysqlConnection);
  container.bind<Container>(IDENTIFIER.HELPER_CONTAINER).toConstantValue(helperContainer);

  container.bind<IUsersRoutes>(IDENTIFIER.USERS_ROUTES).to(UsersRoutes);
  container.bind<IUsersController>(IDENTIFIER.USERS_CONTROLLER).to(UsersController);
  container.bind<IUsersBusinessLogic>(IDENTIFIER.USERS_BUSINESSLOGIC).to(UsersBusinessLogic);
  container.bind<IUsersDataAccess>(IDENTIFIER.USERS_DATAACCESS).to(UsersDataAccess);

  return container;
};
