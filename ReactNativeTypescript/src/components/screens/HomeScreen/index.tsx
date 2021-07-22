import React, {useState} from 'react';
import {View} from 'react-native';
import IUser from '../../../models/IUsers';
import UserDetails from '../../molecules/UserDetails';
import UserList from '../../organisms/UserList';

const HomeScreen: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <View>
      {selectedUser ? (
        <UserDetails
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          users={users}
          setUsers={setUsers}
        />
      ) : (
        <UserList
          setSelectedUser={setSelectedUser}
          users={users}
          setUsers={setUsers}
        />
      )}
    </View>
  );
};

export default HomeScreen;
