import {ActionTypes, initialState} from '../../utils/constants.js';

export const setAuthorizationRequired = (state = initialState.isAuthorizationRequired, action) => {
  switch (action.type) {
    case ActionTypes.SET_AUTHORIZATION_REQUIRED:
      return action.payload;
  }

  return state;
};
