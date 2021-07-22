import styled from '@emotion/native';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {View, Text} from 'react-native';
import ITodo from '../../../models/ITodo';
import IUser from '../../../models/IUsers';

export interface TodoListItemProps {
  todo: ITodo;
  todoList: ITodo[];
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  selectedUser: number;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  todoList,
  users,
  setUsers,
  selectedUser,
}) => {
  const {title, completed, id} = todo;

  const onCheck = (newValue: boolean) => {
    // Actualiza el arreglo de TODOS
    const indexOfTodo = todoList.indexOf(todo);
    const newArray = todoList;
    newArray[indexOfTodo] = {...todo, completed: newValue};

    // Actualiza TODO el arreglo de USERS
    const newUsers = [...users];
    newUsers[selectedUser] = {...users[selectedUser], todos: newArray};

    setUsers(newUsers);
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
