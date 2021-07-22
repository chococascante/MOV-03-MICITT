import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import ITodo from '../../../models/ITodo';
import IUser from '../../../models/IUsers';
import UserListItem from '../../molecules/UserListItem';

// const user = {
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: {
//       lat: '-37.3159',
//       lng: '81.1496',
//     },
//   },
//   phone: '1-770-736-8031 x56442',
//   website: 'hildegard.org',
//   company: {
//     name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets',
//   },
// };

// const user2 = {
//   ...user,
//   id: 2,
// };

export interface UserListProps {
  setSelectedUser: React.Dispatch<React.SetStateAction<number | null>>;
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const UserList: React.FC<UserListProps> = ({
  setSelectedUser,
  users,
  setUsers,
}) => {
  const fetchData = async () => {
    try {
      const userReponse = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );

      const todoResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );

      const users = (userReponse.data as IUser[]).map(user => ({
        ...user,
        todos: (todoResponse.data as ITodo[]).filter(
          todo => todo.userId === user.id,
        ),
      }));

      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({item, index}) => (
            <UserListItem
              key={item.id}
              user={item}
              index={index}
              setSelectedUser={setSelectedUser}
            />
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

export default UserList;
