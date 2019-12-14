import {ActionTypes, initialState} from '../../utils/constants.js';

export const setCountFilmsShow = (state = initialState.countFilmsShow, action) => {
  switch (action.type) {
    case ActionTypes.SET_COUNT_FILMS_SHOW:
      return action.payload;

    default:
      return state;
  }
};
