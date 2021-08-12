import React from 'react';
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux'; // 1
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; // 2
import HomeScreen from './src/components/screens/HomeScreen';
import * as reducers from './src/store/reducers';
import thunk from 'redux-thunk';
import ListaPublicaciones from './src/components/organisms/ListaPublicaciones';
import ListaPublicacionesClase from './src/components/organisms/ListaPublicacionesClase';
import {PublicacionesProvider} from './src/contexts/publicaciones-context';
import {UsersProvider} from './src/contexts/users-context';
import Component from './Component';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(compose(thunk)),
); // 3

const App = () => {
  return (
    <Provider store={store}>
      <PublicacionesProvider>
        <UsersProvider>
          <SafeAreaView>
            <Component />
          </SafeAreaView>
        </UsersProvider>
      </PublicacionesProvider>
    </Provider>
  );
};

export default App;
