import {ActionType, initialState} from '../../utils/constants.js';

export const setCountFilmsShow = (state = initialState.countFilmsShow, action) => {
  switch (action.type) {
    case ActionType.SET_COUNT_FILMS_SHOW:
      return action.payload;

    default:
      return state;
  }
};
