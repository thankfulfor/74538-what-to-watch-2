import {setCountFilmsShow} from './set-count-films-show.js';
import {ActionTypes} from '../../utils/constants.js';

const countFilmsShowMock = 1;
const countFilmsShowExpected = 20;

describe(`setCountFilmsShow работает корректно`, () => {
  it(`Reducer корректно возвращает количество показываемых в данный момент фильмов`, () => {
    expect(setCountFilmsShow(countFilmsShowMock, {
      type: ActionTypes.SET_COUNT_FILMS_SHOW,
      payload: 20
    }))
      .toEqual(countFilmsShowExpected);
  });
});
