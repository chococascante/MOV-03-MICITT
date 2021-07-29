import {ACTUALIZAR_PRUEBA} from '..';

export const actualizarPrueba = (payload: string) => ({
  type: ACTUALIZAR_PRUEBA,
  payload,
});
