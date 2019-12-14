import React from 'react';
import renderer from 'react-test-renderer';
import {FilmDetails} from './film-details.jsx';
import {BrowserRouter} from 'react-router-dom';

const film = {
  genre: `Action`,
  released: 2015,
  director: `Alejandro G. Iñárritu`,
  starring: [
    `Leonardo DiCaprio`,
    `Tom Hardy`,
    `Will Poulter`
  ],
  // eslint-disable-next-line camelcase
  run_time: 156,
};

it(`FilmDetails корректно рендерится после перезапуска`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FilmDetails film={film} />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
