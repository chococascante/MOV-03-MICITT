import axios from 'axios';
import React, {createContext, useContext, useState, useMemo} from 'react';
import IUser from '../models/IUsers';

interface UsersContextProps {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
  selectedUser: number | null;
  setSelectedUser: (user: number | null) => void;
  fetchUsers: () => Promise<void>;
}

const UsersContext = createContext<UsersContextProps>({
  users: [],
  setUsers: () => {},
  selectedUser: null,
  setSelectedUser: () => {},
  fetchUsers: () => Promise.resolve(),
});

export const UsersProvider: React.FC = ({children}) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const fetchUsers = async () => {
    try {
      const usuarios = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUsers(usuarios.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = useMemo(() => {
    return {users, setUsers, selectedUser, setSelectedUser, fetchUsers};
  }, [users, setUsers, selectedUser, setSelectedUser, fetchUsers]);

  return <UsersContext.Provider value={val}>{children}</UsersContext.Provider>;
};

export const useUsers = () => useContext(UsersContext);
