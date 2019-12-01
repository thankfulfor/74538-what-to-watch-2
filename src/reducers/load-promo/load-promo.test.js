import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '../../api';
import {ActionTypes} from '../../utils/constants.js';
import {Operation} from '../../operations/operation.js';


describe(`loadPromo работает корректно`, () => {
  it(`loadPromo корректно посылает запрос к API /films/promo`, function () {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const promoLoader = Operation.loadPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.LOAD_PROMO,
          payload: [{fake: true}],
        });
      });
  });
});
