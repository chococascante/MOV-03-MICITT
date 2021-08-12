import {actualizarPublicaciones, fetchPublicaciones} from '.';
import {ACTUALIZAR_PUBLICACIONES} from '..';
import configureMockStore from 'redux-mock-store';
import {IState} from '../../../models/IState';
import thunk from 'redux-thunk';

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
];

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: posts,
    }),
  ),
}));

const mockStore = configureMockStore([thunk]);

const initialState = {
  Publicaciones: {
    publicaciones: [],
  },
};

describe('Publicaciones actions', () => {
  it('actualizaPublicaciones action', () => {
    const action = actualizarPublicaciones([]);
    expect(action).toEqual({
      type: ACTUALIZAR_PUBLICACIONES,
      payload: [],
    });
  });

  // it('fetchPublicaciones action', () => {
  //   const store = mockStore(initialState);
  //   fetchPublicaciones()(store.dispatch);
  //   expect(store.getActions()).toContainEqual({
  //     type: ACTUALIZAR_PUBLICACIONES,
  //     payload: posts,
  //   });
  //   // expect((store.getState() as IState).Publicaciones.publicaciones).toEqual(
  //   //   posts,
  //   // );
  // });
});
