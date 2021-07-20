import React, {useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const ComponenteFlecha = ({
  contadorClases,
  nombre,
  onCambioNombre,
  onCambioContador,
}) => {
  const obj = {nombre1: 'Luis', apellido: 'Cascante'};
  const {nombre1} = obj;

  useEffect(() => {
    setTimeout(() => {
      onCambioContador();
    }, 3000);
  }, []);

  return (
    <View>
      <Text>Soy la clase {contadorClases}.</Text>
      <TextInput
        placeholder="Cambie el nombre"
        value={nombre}
        onChangeText={onCambioNombre}
      />
      <Button title="Botón" onPress={onCambioContador} />
    </View>
  );
};

export default ComponenteFlecha;
