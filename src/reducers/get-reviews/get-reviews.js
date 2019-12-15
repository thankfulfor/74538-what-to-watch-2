import {ActionType, initialState} from '../../utils/constants.js';

export const getReviews = (state = initialState.reviews, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return [...action.payload];

    default:
      return state;
  }
};
