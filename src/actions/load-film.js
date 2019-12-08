import {ActionTypes} from '../utils/constants.js';

export const loadFilmAction = (promoFilm) => ({
  type: ActionTypes.LOAD_FILM,
  payload: promoFilm,
});
