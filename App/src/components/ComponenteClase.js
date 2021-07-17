import React from 'react';
import {View, Text, Button} from 'react-native';

export default class ComponenteClase extends React.Component {
  render() {
    return (
      <>
        <Text>Soy una clase.</Text>
        <Button title="Botón" />
      </>
    );
  }
}
