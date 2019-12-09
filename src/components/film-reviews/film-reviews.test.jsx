import React from 'react';
import renderer from 'react-test-renderer';
import {FilmReviews} from './film-reviews.jsx';
import {BrowserRouter} from 'react-router-dom';

it(`FilmReviews корректно рендерится после перезапуска`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FilmReviews />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
