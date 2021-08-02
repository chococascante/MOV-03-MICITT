import {IAction} from '../../../models/IAction';
import IPublicacion from '../../../models/IPublicacion';
import {ACTUALIZAR_PUBLICACION, ACTUALIZAR_PUBLICACIONES} from '../../actions';

export interface IPublicacionReducer {
  publicaciones: IPublicacion[];
  publicacion?: IPublicacion;
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
    case ACTUALIZAR_PUBLICACION:
      return {...state, publicacion: payload as IPublicacion};
    default:
      return state;
  }
};
