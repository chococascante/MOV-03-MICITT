import styled from '@emotion/native';
import React from 'react';
import {View, Text, Button, FlatList, ListRenderItem} from 'react-native';
import ITodo from '../../../models/ITodo';
import IUser from '../../../models/IUsers';
import TodoListItem from '../TodoListItem';

export interface UserDetailsProps {
  selectedUser: number;
  setSelectedUser: React.Dispatch<React.SetStateAction<number | null>>;
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  selectedUser,
  setSelectedUser,
  users,
  setUsers,
}) => {
  const {name, email, phone, todos} = users[selectedUser];

  const onBackPress = () => {
    setSelectedUser(null);
  };

  return (
    <Container>
      <CustomText>{name}</CustomText>
      <CustomText>{email}</CustomText>
      <CustomText>{phone}</CustomText>

      {todos && (
        <TodoList
          data={todos}
          renderItem={({item}) => (
            <TodoListItem
              selectedUser={selectedUser}
              todo={item as ITodo}
              todoList={todos}
              users={users}
              setUsers={setUsers}
            />
          )}
        />
      )}
      <Button title="Back" onPress={onBackPress} />
    </Container>
  );
};

const Container = styled.View`
  padding: 16px;
  height: 100%;
`;

const CustomText = styled.Text`
  font-size: 18px;
`;

const TodoList = styled.FlatList`
  padding: 8px;
`;

export default UserDetails;
