import {ActionCreator, reducer} from './reducer.js';

const films = [{
  previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
  genre: `Drama`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
}];

const mockInitialState = {
  genre: `All genres`,
  filmCards: films,
  countFilmsShow: 8,
  countGenres: 10,
};

describe(`Reducer'ы работают корректно`, () => {
  it(`Reducer возвращает initialState`, () => {
    expect(reducer(
        mockInitialState,
        {}))
      .toEqual(mockInitialState);
  });

  it(`Reducer корректно выставляет жанр`, () => {
    expect(reducer({
      genre: `All genres`,
      filmCards: films,
    }, {
      type: `CHANGE_FILTER_BY_GENRE`,
      payload: `drama`
    }))
      .toEqual({
        genre: `drama`,
        filmCards: films,
        countFilmsShow: mockInitialState.countFilmsShow
      });
  });

  it(`Reducer корректно возвращает массив отфильтрованных фильмов`, () => {
    expect(reducer({
      genre: `All genres`,
      filmCards: films
    }, {
      type: `FILTER_FILMS_BY_GENRE`,
      payload: films[0]
    }))
      .toEqual({
        genre: `All genres`,
        filmCards: films[0]
      });
  });

  it(`Reducer корректно возвращает количество показываемых в данный момент фильмов`, () => {
    expect(reducer({
      countFilmsShow: 1
    }, {
      type: `INCREASE_COUNT_FILMS_SHOW`,
      payload: 1
    }))
      .toEqual({
        countFilmsShow: 2
      });
  });
});

describe(`ActionCreator работает корректно`, () => {
  it(`ActionCreator устанавливает переданный жанр`, () => {
    expect(ActionCreator.changeFilterByGenre(`drama`))
      .toEqual({
        type: `CHANGE_FILTER_BY_GENRE`,
        payload: `drama`
      });
  });

  it(`ActionCreator фильтрует массив фильмов по переданному жанру`, () => {
    // eslint-disable-next-line no-console
    expect(ActionCreator.getFilmListByGenre(`Drama`, mockInitialState))
      .toEqual({
        type: `FILTER_FILMS_BY_GENRE`,
        payload: [films[0]]
      });
  });

  it(`ActionCreator увеличивает количество на переданное значение`, () => {
    // eslint-disable-next-line no-console
    expect(ActionCreator.increaseCountFilmsShow())
      .toEqual({
        type: `INCREASE_COUNT_FILMS_SHOW`,
        payload: 20
      });
  });
});
