import {ActionType} from '../utils/constants.js';

export const loadFilmAction = (promoFilm) => ({
  type: ActionType.LOAD_FILM,
  payload: promoFilm,
});
