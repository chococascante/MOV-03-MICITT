import styled from '@emotion/native';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useUsers} from '../../../contexts/users-context';
import IUser from '../../../models/IUsers';
import {actualizarSelectedUser} from '../../../store/actions/Users';

export interface UserListItemProps {
  user: IUser;
  index: number;
}

const UserListItem: FC<UserListItemProps> = ({user, index}) => {
  // const dispatch = useDispatch();
  const {setSelectedUser} = useUsers();
  const onPress = () => {
    // dispatch(actualizarSelectedUser(index));
    setSelectedUser(index);
  };

  return (
    <ItemContainer onPress={onPress}>
      <Text>
        {++index}. {user.name}
      </Text>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity`
  background-color: #f1f1f1;
  border-radius: 32px;
  padding: 8px 12px;
  margin: 4px 0;
`;

export default UserListItem;
