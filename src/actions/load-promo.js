import {ActionType} from '../utils/constants.js';

export const loadPromoAction = (promoFilm) => ({
  type: ActionType.LOAD_PROMO,
  payload: promoFilm,
});
