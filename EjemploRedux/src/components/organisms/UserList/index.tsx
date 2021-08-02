import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useUsers} from '../../../contexts/users-context';
import {IState} from '../../../models/IState';
import {fetchUsers} from '../../../store/actions/Users';

import UserListItem from '../../molecules/UserListItem';

const UserList: React.FC = () => {
  // const users = useSelector((state: IState) => state.Users.users);
  // const dispatch = useDispatch();

  const {users, fetchUsers} = useUsers();

  useEffect(() => {
    // dispatch(fetchUsers());
    fetchUsers();
  }, []);

  return (
    <View>
      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({item, index}) => (
            <UserListItem key={item.id} user={item} index={index} />
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

export default UserList;
