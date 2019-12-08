import {ActionTypes} from '../utils/constants.js';

export const loadFavoriteFilmAction = (favoriteFilms) => ({
  type: ActionTypes.LOAD_FAVORITE_FILMS,
  payload: favoriteFilms,
});
