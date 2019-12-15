import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '../../api.js';
import {ActionType} from '../../utils/constants.js';
import {Operation} from '../../operations/operation.js';

describe(`getReviews работает корректно`, () => {
  it(`getReviews корректно посылает запрос к API /comments/1`, function () {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const idMock = `1`;
    const reviewsLoader = Operation.getReviews(idMock);

    apiMock
      .onGet(`/comments/${idMock}`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });
});
