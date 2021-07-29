import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {ACTUALIZAR_PUBLICACIONES} from '..';
import {IAction} from '../../../models/IAction';
import IPublicacion from '../../../models/IPublicacion';
import {IState} from '../../../models/IState';

export const actualizarPublicaciones = (payload: IPublicacion[]): IAction => ({
  type: ACTUALIZAR_PUBLICACIONES,
  payload,
});

export function fetchPublicaciones() {
  return async function (dispatch: ThunkDispatch<IState, null, IAction>) {
    try {
      const publicaciones = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );

      dispatch(actualizarPublicaciones(publicaciones.data));
    } catch (error) {
      console.error(error);
    }
  };
}
