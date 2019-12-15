import {ActionType} from '../utils/constants.js';

export const loadFavoriteFilmAction = (favoriteFilms) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: favoriteFilms,
});
