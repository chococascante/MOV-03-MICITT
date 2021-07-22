import IAddress from './IAddress';
import ITodo from './ITodo';

export default interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  todos?: ITodo[];
}
