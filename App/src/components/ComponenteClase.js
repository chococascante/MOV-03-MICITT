import React from 'react';
import {Text, Button, TextInput} from 'react-native';

const saludo = 'Hola!';
export default class ComponenteClase extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbumes();
  }

  render() {
    return (
      <>
        <Text>Soy la clase {this.props.contadorClases}.</Text>
        <TextInput
          placeholder="Cambie el nombre"
          value={this.props.nombre}
          onChangeText={this.props.onCambioNombre}
        />
        <Button title="Botón" onPress={this.props.onCambioContador} />
      </>
    );
  }
}
