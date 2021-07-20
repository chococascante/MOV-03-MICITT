import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const Album = ({item, esPar}) => {
  return (
    <View style={esPar ? styles.contenedor : styles.contenedorOscuro}>
      <Text style={esPar ? styles.titulo : styles.tituloOscuro}>
        Título: {item.title}
      </Text>
      <Text style={esPar ? styles.label : styles.labelDark}>
        Usuario: {item.userId}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    display: 'flex',
    paddingVertical: 6,
    borderRadius: 32,
    paddingHorizontal: 6,
  },
  contenedorOscuro: {
    display: 'flex',
    paddingVertical: 6,
    backgroundColor: '#333',
  },
  label: {
    color: '#a3a3a3',
  },
  labelDark: {
    color: '#f1f1f1',
  },
  titulo: {
    color: '#333',
  },
  tituloOscuro: {
    color: '#ccc',
  },
});

export default Album;
