import {IAction} from '../../../models/IAction';
import ITodo from '../../../models/ITodo';
import {ACTUALIZAR_TODOS} from '../../actions';

export interface ITodosReducerState {
  todos: ITodo[];
}

const initialState = {
  todos: [],
};

export default (
  state = initialState,
  {type, payload}: IAction,
): ITodosReducerState => {
  switch (type) {
    case ACTUALIZAR_TODOS:
      return {...state, todos: payload as ITodo[]};
    default:
      return state;
  }
};
