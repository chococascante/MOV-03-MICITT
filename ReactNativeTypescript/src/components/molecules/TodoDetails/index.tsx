import React from 'react';
import {View, Text, Button} from 'react-native';
import ITodo from '../../../models/ITodo';
import CheckBox from '@react-native-community/checkbox';

export interface TodoDetails {
  todo: ITodo;
  setCurrentTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
}

const TodoDetails: React.FC<TodoDetails> = ({todo, setCurrentTodo}) => {
  return (
    <View>
      <Text>{todo.id}</Text>
      <Text>{todo.title}</Text>
      <CheckBox value={todo.completed} />
      <Button title="Back" onPress={() => setCurrentTodo(null)} />
    </View>
  );
};

export default TodoDetails;
