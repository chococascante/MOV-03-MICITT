import styled from '@emotion/native';
import React, {FC} from 'react';
import {Text} from 'react-native';
import IUser from '../../../models/IUsers';

export interface UserListItemProps {
  user: IUser;
  index: number;
  setSelectedUser: React.Dispatch<React.SetStateAction<number | null>>;
}

const UserListItem: FC<UserListItemProps> = ({
  user,
  index,
  setSelectedUser,
}) => {
  const onPress = () => {
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
