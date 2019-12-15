import {ActionType, initialState} from '../utils/constants.js';

export const getReviewsAction = (state = initialState.reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: state,
});
