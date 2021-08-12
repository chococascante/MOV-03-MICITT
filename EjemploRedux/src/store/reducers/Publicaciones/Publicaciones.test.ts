import {ACTUALIZAR_PUBLICACION} from '../../actions';
import {actualizarPublicaciones} from '../../actions/Publicaciones';
import PublicacionesReducer, {IPublicacionReducer} from './';

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
];

const initialState: IPublicacionReducer = {
  publicaciones: [],
};

describe('Publicaciones Reducer', () => {
  it('debe devolver el estado por defecto', () => {
    const result = PublicacionesReducer();
    expect(result).toEqual(initialState);
  });

  it('maneja actualizar publicaciones', () => {
    const result = PublicacionesReducer(
      initialState,
      actualizarPublicaciones(posts),
    );
    expect(result).toEqual({
      ...initialState,
      publicaciones: posts,
    });
  });

  it('maneja actualizar publicacion actual', () => {
    const result = PublicacionesReducer(initialState, {
      type: ACTUALIZAR_PUBLICACION,
      payload: posts[0],
    });
    expect(result).toEqual({
      ...initialState,
      publicacion: posts[0],
    });
  });
});
