import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {ACTUALIZAR_SELECTED_USER, ACTUALIZAR_USERS} from '..';
import {IAction} from '../../../models/IAction';
import {IState} from '../../../models/IState';
import IUser from '../../../models/IUsers';

export const actualizarUsers = (payload: IUser[]) => ({
  type: ACTUALIZAR_USERS,
  payload,
});

export const actualizarSelectedUser = (payload: number | null) => ({
  type: ACTUALIZAR_SELECTED_USER,
  payload,
});

export const fetchUsers =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const userReponse = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      dispatch(actualizarUsers(userReponse.data));
    } catch (error) {
      console.error(error);
    }
  };

export function prueba() {
  return async function (dispatch: ThunkDispatch<IState, null, IAction>) {
    // Lógica de función
  };
}
