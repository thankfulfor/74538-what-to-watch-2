import {ActionTypes, initialState} from '../../utils/constants.js';

export const loadIsFavorite = (state = initialState.isFavorite, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_IS_FAVORITE:
      return action.payload;
  }

  return state;
};
