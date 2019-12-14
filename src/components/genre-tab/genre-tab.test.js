import React from 'react';
import renderer from 'react-test-renderer';
import {GenreTab} from './genre-tab.jsx';

it(`GenreTab рендерится корректно`, () => {
  const tabClickHandler = jest.fn();

  const tree = renderer
    .create(<GenreTab
      genre={``}
      genres={[``]}
      onTabClick={tabClickHandler}
    />);

  expect(tree).toMatchSnapshot();
});
