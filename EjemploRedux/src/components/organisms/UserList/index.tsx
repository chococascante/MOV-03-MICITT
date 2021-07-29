import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import IUser from '../../../models/IUsers';
import {actualizarUsers, fetchUsers} from '../../../store/actions/Users';

import UserListItem from '../../molecules/UserListItem';

const UserList: React.FC = () => {
  const users = useSelector((state: IState) => state.Users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
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
