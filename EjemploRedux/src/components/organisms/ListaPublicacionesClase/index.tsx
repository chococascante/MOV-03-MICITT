import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {ThunkDispatch} from 'redux-thunk';
import {IAction} from '../../../models/IAction';
import IPublicacion from '../../../models/IPublicacion';
import {IState} from '../../../models/IState';
import ITodo from '../../../models/ITodo';
import IUser from '../../../models/IUsers';
import {fetchPublicaciones} from '../../../store/actions/Publicaciones';

interface Props {
  publicaciones: IPublicacion[];
  users: IUser[];
  todos: ITodo[];
  fetchPublicacionesProp: () => void;
}

class ListaPublicacionesClase extends Component<Props> {
  componentDidMount() {
    this.props.fetchPublicacionesProp();
  }

  render() {
    return (
      <FlatList
        data={this.props.publicaciones}
        renderItem={({item}) => <Text>{item.body}</Text>}
      />
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    publicaciones: state.Publicaciones.publicaciones,
    users: state.Users.users,
    todos: state.Todos.todos,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, null, IAction>) => {
  return {
    fetchPublicacionesProp: () => dispatch(fetchPublicaciones()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListaPublicacionesClase);
