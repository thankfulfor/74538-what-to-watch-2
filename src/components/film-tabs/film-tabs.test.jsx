import React from 'react';
import renderer from 'react-test-renderer';
import {FilmTabs} from './film-tabs.jsx';
import {BrowserRouter} from 'react-router-dom';

it(`FilmTabs корректно рендерится после перезапуска`, () => {
  const handleClick = jest.fn();
  const tree = renderer
    .create(
        <BrowserRouter>
          <FilmTabs
            tabToShow=''
            onTabClick={handleClick}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
