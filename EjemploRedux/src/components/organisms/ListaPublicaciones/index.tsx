import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import {fetchPublicaciones} from '../../../store/actions/Publicaciones';

const ListaPublicaciones = () => {
  const dispatch = useDispatch();
  const publicaciones = useSelector(
    (state: IState) => state.Publicaciones.publicaciones,
  );

  useEffect(() => {
    dispatch(fetchPublicaciones());
  }, []);

  return (
    <FlatList
      data={publicaciones}
      renderItem={({item}) => <Text>{item.body}</Text>}
    />
  );
};

export default ListaPublicaciones;
