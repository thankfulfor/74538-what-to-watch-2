import {ActionCreator, initialState, reducer} from './reducer.js';

const films = [
  {
    previewImage: `img/we-need-to-talk-about-kevin.jpg`,
    name: `We need to talk about Kevin`,
    genre: `drama`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
  }
];

describe(`Reducer'ы работают корректно`, () => {
  it(`Reducer возвращает initialState`, () => {
    expect(reducer(
        undefined,
        {}))
      .toEqual(initialState);
  });

  it(`Reducer корректно выставляет жанр`, () => {
    expect(reducer({
      genre: `All genres`,
      filmCards: films
    }, {
      type: `CHANGE_FILTER_BY_GENRE`,
      payload: `drama`
    }))
      .toEqual({
        genre: `drama`,
        filmCards: films
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
});

describe(`ActionCreator работает корректно`, () => {
  it(`ActionCreator set genre by a given value`, () => {
    expect(ActionCreator.changeFilterByGenre(`drama`))
      .toEqual({
        type: `CHANGE_FILTER_BY_GENRE`,
        payload: `drama`
      });
  });

  it(`ActionCreator filter filmCards by a given value`, () => {
    expect(ActionCreator.getFilmListByGenre(`drama`))
      .toEqual({
        type: `FILTER_FILMS_BY_GENRE`,
        payload: [films[0]]
      });
  });
});
