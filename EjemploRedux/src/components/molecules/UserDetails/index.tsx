import styled from '@emotion/native';
import React, {useEffect, useMemo} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-native';
import {useUsers} from '../../../contexts/users-context';
import {IState} from '../../../models/IState';
import ITodo from '../../../models/ITodo';
import {fetchTodos} from '../../../store/actions/Todos';
import {actualizarSelectedUser} from '../../../store/actions/Users';
import TodoListItem from '../TodoListItem';

const UserDetails: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectedUser = useSelector((state: IState) => state.Users.selectedUser);
  // const users = useSelector((state: IState) => state.Users.users);
  const {users, setSelectedUser} = useUsers();
  const {name, email, phone, id} = users[selectedUser || 0];
  const todos = useSelector((state: IState) => state.Todos.todos);
  const filteredTodos = useMemo(
    () => todos.filter(todo => todo.userId === id),
    [todos, id],
  );

  const onBackPress = () => {
    // dispatch(actualizarSelectedUser(null));
    setSelectedUser(null);
    //REACT ROUTER NATIVE
    history.goBack();
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <Container>
      <CustomText>{name}</CustomText>
      <CustomText>{email}</CustomText>
      <CustomText>{phone}</CustomText>

      <Image
        style={styles.image}
        source={{uri: 'https://via.placeholder.com/600/92c952'}}
      />

      {filteredTodos && (
        <TodoList
          data={filteredTodos}
          renderItem={({item}) => <TodoListItem todo={item as ITodo} />}
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

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default UserDetails;
