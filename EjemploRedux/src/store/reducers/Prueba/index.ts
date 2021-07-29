import {IAction} from '../../../models/IAction';
import {ACTUALIZAR_PRUEBA} from '../../actions';

export interface IPruebaReducerState {
  prueba: string;
}

const initialState = {
  prueba: 'prueba',
};

export default (state = initialState, {type, payload}: IAction) => {
  switch (type) {
    case ACTUALIZAR_PRUEBA:
      return {...state, prueba: payload as string};
    default:
      return state;
  }
};
