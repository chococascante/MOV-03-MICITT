import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ComponenteClase from './src/components/ComponenteClase';
import ComponenteFlecha from './src/components/ComponenteFuncion';

const App = () => {
  const [contadorClases, setContadorClases] = useState(0);
  const [nombre, setNombre] = useState('Luis');

  const handleCambioNombre = nuevoNombre => {
    setNombre(nuevoNombre);
  };

  const handleCambioContador = () => {
    setContadorClases(contadorClases + 1);
  };

  const fetchAlbumes = async () => {
    try {
      const resultado = await fetch(
        'https://jsonplaceholder.typicode.com/albums',
      );

      const datos = await resultado.json();
      console.log(datos);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAlbumesPromesa = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(resultado =>
        resultado
          .json()
          .then(datos => console.log(datos))
          .catch(error => console.error(error)),
      )
      .catch(error => console.error(error));
  };

  return (
    <SafeAreaView>
      <ComponenteClase
        nombre={nombre}
        onCambioNombre={handleCambioNombre}
        onCambioContador={handleCambioContador}
        contadorClases={contadorClases}
      />
      <ComponenteFlecha
        nombre={nombre}
        onCambioNombre={handleCambioNombre}
        onCambioContador={handleCambioContador}
        contadorClases={contadorClases}
      />
    </SafeAreaView>
  );
};

export default App;
