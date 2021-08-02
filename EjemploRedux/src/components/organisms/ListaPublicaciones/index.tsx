import axios from 'axios';
import React, {useContext, useEffect} from 'react';
import {Text, FlatList} from 'react-native';
import {
  PublicacionesContext,
  usePublicaciones,
} from '../../../contexts/publicaciones-context';

const datosPrueba = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
];

const ListaPublicaciones = () => {
  const {publis, setPublicaciones, fetchPublicacioncesContext} =
    usePublicaciones();

  const fetchPublicacionesComponente = async () => {
    try {
      const publicaciones = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPublicaciones(publicaciones.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchPublicacionesComponente();
    fetchPublicacioncesContext();
  }, []);

  return (
    <FlatList data={publis} renderItem={({item}) => <Text>{item.body}</Text>} />
  );
};

export default ListaPublicaciones;
