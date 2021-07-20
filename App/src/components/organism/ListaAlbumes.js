import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Album from '../Album';
import BrandedButton from '../atoms/BrandedButton/BrandedButton';
import Separador from '../atoms/Separador';

const ListaAlbumes = () => {
  const [albumes, setAlbumes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function fetchAlbumes() {
    try {
      const resultado = await fetch(
        'https://jsonplaceholder.typicode.com/albums',
      );

      const datos = await resultado.json();
      setAlbumes(datos);
      setLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAlbumes();
  }, []);

  return (
    <View style={styles.contenedor}>
      <BrandedButton />
      {loaded ? (
        <FlatList
          data={albumes}
          renderItem={({item, index}) => (
            <Album item={item} esPar={index % 2} />
          )}
          ItemSeparatorComponent={Separador}
        />
      ) : (
        <>
          <ActivityIndicator color="#000" />
          <Text>Loading...</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 8,
  },
});

export default ListaAlbumes;
