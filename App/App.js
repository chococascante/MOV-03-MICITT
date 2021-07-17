import React from 'react';
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
import ComponenteFlecha, {
  ComponenteFuncion,
} from './src/components/ComponenteFuncion';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hola Mundo!</Text>
      <ComponenteClase />
      <ComponenteFlecha />
      <ComponenteFuncion />
    </SafeAreaView>
  );
};

export default App;
