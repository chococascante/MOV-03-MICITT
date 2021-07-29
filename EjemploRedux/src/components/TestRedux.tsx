import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../models/IState';
import {actualizarPrueba} from '../store/actions/Prueba';

const TestRedux: React.FC = () => {
  const prueba = useSelector((state: IState) => state.Prueba.prueba);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(actualizarPrueba('prueba 1'));
    }, 3000);
  }, []);

  return (
    <View>
      <Text>{prueba}</Text>
    </View>
  );
};

export default TestRedux;
