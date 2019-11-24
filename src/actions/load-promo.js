import {ActionTypes} from '../utils/constants.js';

export const loadPromoAction = (promoFilm) => ({
  type: ActionTypes.LOAD_PROMO,
  payload: promoFilm,
});
