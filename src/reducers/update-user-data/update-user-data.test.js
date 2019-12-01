import {ActionTypes} from '../../utils/constants.js';
import {updateUserData} from './update-user-data.js';

const userDataMock = {};
const userDataExpected = {};

describe(`updateUserData работает корректно`, () => {
  it(`updateUserData устанавливает переданный userData`, () => {
    expect(updateUserData(userDataMock, {
      type: ActionTypes.UPDATE_USER_DATA,
      payload: userDataMock
    }))
      .toEqual(userDataExpected);
  });
});
