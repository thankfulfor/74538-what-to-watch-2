import {ActionType, initialState} from '../../utils/constants.js';

export const updateUserData = (state = initialState.userData, action) => {
  switch (action.type) {
    case ActionType.UPDATE_USER_DATA:
      return action.payload;
  }

  return state;
};
