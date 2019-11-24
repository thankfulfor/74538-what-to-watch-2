import {ActionTypes, initialState} from '../../utils/constants.js';

export const loadPromo = (state = initialState.promoFilm, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_PROMO:
      return action.payload;

    default:
      return state;
  }
};
