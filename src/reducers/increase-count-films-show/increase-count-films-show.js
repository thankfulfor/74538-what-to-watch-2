import {ActionTypes, initialState} from '../../utils/constants.js';

export const increaseCountFilmsShow = (state = initialState.countFilmsShow, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT_FILMS_SHOW:
      return state + action.payload;

    default:
      return state;
  }
};
