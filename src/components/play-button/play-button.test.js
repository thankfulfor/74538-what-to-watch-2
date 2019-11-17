import React from 'react';
import renderer from 'react-test-renderer';
import {PlayButton} from './play-button';

it(`PlayButton корректно рендерится после перезапуска`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<PlayButton onShowPlayerButtonClick={clickHandler} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
