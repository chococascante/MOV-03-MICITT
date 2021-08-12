import {actualizarPrueba} from '.';
import {ACTUALIZAR_PRUEBA} from '..';

describe('Prueba actions', () => {
  it('Crea la acción como debe', () => {
    const action = actualizarPrueba('prueba');
    expect(action).toEqual({
      type: ACTUALIZAR_PRUEBA,
      payload: 'prueba',
    });
  });
});
