import {ActionTypes, initialState} from '../utils/constants.js';

export const getReviewsAction = (state = initialState.reviews) => ({
  type: ActionTypes.LOAD_REVIEWS,
  payload: state,
});
