import {increaseCountFilmsShow} from './increase-count-films-show.js';
import {ActionTypes} from '../../utils/constants.js';

const countFilmsShowMock = 1;
const countFilmsShowExpected = 2;

describe(`increaseCountFilmsShow работает корректно`, () => {
  it(`Reducer корректно возвращает количество показываемых в данный момент фильмов`, () => {
    expect(increaseCountFilmsShow(countFilmsShowMock, {
      type: ActionTypes.INCREASE_COUNT_FILMS_SHOW,
      payload: 1
    }))
      .toEqual(countFilmsShowExpected);
  });
});
