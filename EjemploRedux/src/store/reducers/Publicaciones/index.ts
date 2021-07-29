import {IAction} from '../../../models/IAction';
import IPublicacion from '../../../models/IPublicacion';
import {ACTUALIZAR_PUBLICACIONES} from '../../actions';

export interface IPublicacionReducer {
  publicaciones: IPublicacion[];
}

const initialState: IPublicacionReducer = {
  publicaciones: [],
};

export default (
  state = initialState,
  {type, payload}: IAction,
): IPublicacionReducer => {
  switch (type) {
    case ACTUALIZAR_PUBLICACIONES:
      return {...state, publicaciones: payload as IPublicacion[]};

    default:
      return state;
  }
};
