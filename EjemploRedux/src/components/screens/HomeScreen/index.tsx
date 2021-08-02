import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useUsers} from '../../../contexts/users-context';
import {IState} from '../../../models/IState';
import UserDetails from '../../molecules/UserDetails';
import UserList from '../../organisms/UserList';

const HomeScreen: React.FC = () => {
  // const selectedUser = useSelector((state: IState) => state.Users.selectedUser);
  const {selectedUser} = useUsers();

  return <View>{selectedUser ? <UserDetails /> : <UserList />}</View>;
};

export default HomeScreen;
