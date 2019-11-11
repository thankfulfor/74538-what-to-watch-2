import React from 'react';
import renderer from 'react-test-renderer';
import {GenreTab} from './genre-tab.jsx';

const genres = [``];

it(`Is genre catalog tab rendered`, () => {
  const tabClickHandler = jest.fn();

  const tree = renderer
    .create(<GenreTab
      genres={genres}
      onTabClick={tabClickHandler}
    />);

  expect(tree).toMatchSnapshot();
});
