import {ActionTypes, initialState} from '../../utils/constants.js';

export const getReviews = (state = initialState.reviews, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REVIEWS:
      return [...action.payload];

    default:
      return state;
  }
};
