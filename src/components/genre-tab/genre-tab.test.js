import React from 'react';
import renderer from 'react-test-renderer';
import {GenreTab} from './genre-tab.jsx';

it(`GenreTab рендерится корректно`, () => {
  const handleTabClick = jest.fn();

  const tree = renderer
    .create(<GenreTab
      genre={``}
      genres={[``]}
      onTabClick={handleTabClick}
    />);

  expect(tree).toMatchSnapshot();
});
