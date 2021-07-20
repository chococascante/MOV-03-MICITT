import React from 'react';
import {View, Text} from 'react-native';
import styled from '@emotion/native';
import Separador from '../Separador';

const Boton1 = styled.TouchableOpacity`
  width: 50%;
  background: ${props => (props.isDark ? '#333' : '#ccc')};
  border: solid 1px #000;
`;

const edad = 27;
const stringTemplate = `Mi edad es ${27}`;

const BrandedButton = ({onPress, color, width, height, disabled}) => {
  return (
    <Boton1 title="Boton" isDark={true}>
      <Text>Boton</Text>
    </Boton1>
  );
};

export default BrandedButton;
