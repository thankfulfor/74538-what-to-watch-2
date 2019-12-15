import {ActionType, initialState} from '../../utils/constants.js';

export const loadPromo = (state = initialState.promoFilm, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO:
      return action.payload;

    default:
      return state;
  }
};
