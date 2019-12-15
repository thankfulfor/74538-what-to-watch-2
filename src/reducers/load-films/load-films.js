import {ActionType, initialState} from '../../utils/constants.js';

export const loadFilms = (state = initialState.films, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return [...action.payload];

    default:
      return state;
  }
};
