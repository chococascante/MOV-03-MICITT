import IPublicacion from './IPublicacion';
import ITodo from './ITodo';
import IUser from './IUsers';

export interface IAction {
  type: string;
  payload?: string | number | ITodo[] | IUser[] | IPublicacion[] | IPublicacion;
}
