import React from 'react';
import renderer from 'react-test-renderer';
import {FilmTabs} from './film-tabs.jsx';
import {BrowserRouter} from 'react-router-dom';

it(`FilmTabs корректно рендерится после перезапуска`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(
        <BrowserRouter>
          <FilmTabs
            tabToShow=''
            onTabClick={clickHandler}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
