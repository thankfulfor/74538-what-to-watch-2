import {ActionTypes, initialState} from '../../utils/constants.js';

export const getFilmListByGenre = (state = initialState.filteredFilms, action) => {
  switch (action.type) {
    case ActionTypes.FILTER_FILMS_BY_GENRE:
      return [...action.payload];

    default:
      return state;
  }
};
