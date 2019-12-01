import {ActionTypes, initialState} from '../../utils/constants.js';

export const setLoggedIn = (state = initialState.isLoggedIn, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOGGED_IN:
      return action.payload;
  }

  return state;
};
