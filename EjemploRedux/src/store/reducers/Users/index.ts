import {IAction} from '../../../models/IAction';
import IUser from '../../../models/IUsers';
import {ACTUALIZAR_SELECTED_USER, ACTUALIZAR_USERS} from '../../actions';

export interface IUsersState {
  users: IUser[];
  selectedUser: number | null;
}

const initialState: IUsersState = {
  users: [],
  selectedUser: null,
};

export default (state = initialState, {type, payload}: IAction) => {
  switch (type) {
    case ACTUALIZAR_USERS:
      return {...state, users: payload as IUser[]};

    case ACTUALIZAR_SELECTED_USER:
      return {...state, selectedUser: payload as number | null};

    default:
      return state;
  }
};
