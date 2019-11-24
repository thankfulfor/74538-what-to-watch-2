import {ActionTypes, initialState} from '../../utils/constants.js';

export const changeFilterByGenre = (state = initialState.genre, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER_BY_GENRE:
      return action.payload;

    default:
      return state;
  }
};
