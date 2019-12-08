import {ActionTypes, initialState} from '../../utils/constants.js';

export const loadFavoriteFilms = (state = initialState.favoriteFilms, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_FAVORITE_FILMS:
      return [...action.payload];

    default:
      return state;
  }
};
