import {ActionTypes, initialState} from '../../utils/constants.js';

export const loadFilms = (state = initialState.films, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_FILMS:
      return [...action.payload];

    default:
      return state;
  }
};
