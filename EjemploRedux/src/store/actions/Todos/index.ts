import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {ACTUALIZAR_TODOS} from '..';
import {IAction} from '../../../models/IAction';
import {IState} from '../../../models/IState';
import ITodo from '../../../models/ITodo';

export const actualizarTodos = (payload: ITodo[]): IAction => {
  console.log(payload);
  return {
    type: ACTUALIZAR_TODOS,
    payload,
  };
};

export const fetchTodos =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const todoResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );
      dispatch(actualizarTodos(todoResponse.data));
    } catch (error) {
      console.error(error);
    }
  };
