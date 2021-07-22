import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import ITodo from '../../../models/ITodo';

export interface TodoListProps {
  setCurrentTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
}

const TodoList: React.FC<TodoListProps> = ({setCurrentTodo}) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const fetchAlbumes = async () => {
    try {
      const {data} = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );

      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onTodoClick = (todo: ITodo) => {
    setCurrentTodo(todo);
  };

  useEffect(() => {
    fetchAlbumes();
  }, []);

  return (
    <View>
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onTodoClick(item)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default TodoList;
