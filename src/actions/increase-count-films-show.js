import {ActionTypes, CountConstants} from '../utils/constants.js';

export const increaseCountFilmsShowAction = () => ({
  type: ActionTypes.INCREASE_COUNT_FILMS_SHOW,
  payload: CountConstants.COUNT_FILMS_SHOW_MORE,
});
