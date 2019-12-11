import React from 'react';
import renderer from 'react-test-renderer';
import {FilmReviews} from './film-reviews.jsx';
import {BrowserRouter} from 'react-router-dom';

const reviews = [{
  comment: `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
  date: `2019-11-28T08:42:04.899Z`,
  id: 1,
  rating: 2.1,
  user: {id: 11, name: `Jack`}
}];

it(`FilmReviews корректно рендерится после перезапуска`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FilmReviews reviews={reviews} />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
