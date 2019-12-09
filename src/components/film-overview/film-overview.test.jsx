import React from 'react';
import renderer from 'react-test-renderer';
import {FilmOverview} from './film-overview.jsx';
import {BrowserRouter} from 'react-router-dom';

const film = {
  "description": `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
  "rating": 4,
  "director": `Alejandro G. Iñárritu`,
  "starring": [
    `Leonardo DiCaprio`,
    `Tom Hardy`,
    `Will Poulter`
  ],
  "scores_count": 618498,
};

it(`FilmOverview корректно рендерится после перезапуска`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FilmOverview film={film} />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
