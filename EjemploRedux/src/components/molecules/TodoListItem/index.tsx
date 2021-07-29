import styled from '@emotion/native';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import ITodo from '../../../models/ITodo';
import {actualizarTodos} from '../../../store/actions/Todos';
export interface TodoListItemProps {
  todo: ITodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: IState) => state.Todos.todos);
  const {title, completed, id} = todo;

  const onCheck = (newValue: boolean) => {
    // Actualiza el arreglo de TODOS
    const indexOfTodo = todos.indexOf(todo);
    const newArray = todos;
    newArray[indexOfTodo] = {...todo, completed: newValue};

    dispatch(actualizarTodos(newArray));
  };

  return (
    <Container>
      <CustomText>
        {id}. {title}
      </CustomText>
      <CheckBox value={completed} onValueChange={onCheck} />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomText = styled.Text`
  width: 85%;
`;

export default TodoListItem;
