import React from 'react';
import renderer from 'react-test-renderer';
import {PlayButton} from './play-button';

it(`PlayButton корректно рендерится после перезапуска`, () => {
  const handleClick = jest.fn();
  const tree = renderer
    .create(<PlayButton onShowPlayerButtonClick={handleClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
