import React, {useState} from 'react';
import {View, Text} from 'react-native';

const MainContainer = () => {
  // Llamado API
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  return (
    <View>
      {usuarioSeleccionado ? (
        <Text>Lista de todos del usuario</Text>
      ) : (
        <Text>Lista de usuario</Text>
      )}
    </View>
  );
};

export default MainContainer;
