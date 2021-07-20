import React, {Component} from 'react';
import {Text, View, ActivityIndicator, FlatList} from 'react-native';

export default class ListaAlbumesClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumes: [],
      loaded: false,
    };
  }

  async fetchAlbumes() {
    try {
      const resultado = await fetch(
        'https://jsonplaceholder.typicode.com/albums',
      );

      const datos = await resultado.json();
      this.setState({albumes: datos});
      this.setState({loaded: true});
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.fetchAlbumes();
  }

  // componentWillUnmount(){

  // }

  // componentWillMount(){

  // }

  // componentDidUpdate(){

  // }

  render() {
    return (
      <View>
        {this.state.loaded ? (
          <FlatList
            data={this.state.albumes}
            renderItem={({item}) => (
              <View>
                <Text>{item.title}</Text>
                <Text>{item.userId}</Text>
              </View>
            )}
          />
        ) : (
          <>
            <ActivityIndicator color="#000" />
            <Text>Loading...</Text>
          </>
        )}
      </View>
    );
  }
}
