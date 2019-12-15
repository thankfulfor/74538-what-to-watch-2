import {ActionType, initialState} from '../../utils/constants.js';

export const loadFavoriteFilms = (state = initialState.favoriteFilms, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE_FILMS:
      return [...action.payload];

    default:
      return state;
  }
};
