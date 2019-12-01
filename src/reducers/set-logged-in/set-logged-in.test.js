import {setLoggedIn} from './set-logged-in.js';
import {ActionTypes} from '../../utils/constants.js';

const isLoggedInMock = false;
const isLoggedInExpected = false;

describe(`setLoggedIn работает корректно`, () => {
  it(`setLoggedIn устанавливает переданный isLoggedIn`, () => {
    expect(setLoggedIn(isLoggedInMock, {
      type: ActionTypes.SET_LOGGED_IN,
      payload: isLoggedInMock
    }))
      .toEqual(isLoggedInExpected);
  });
});

