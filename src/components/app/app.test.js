import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

const films = [{
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
}];

it(`App корректно рендерится после перезапуска`, () => {
  const clickHandler = function () {};
  const tree = renderer
    .create(<App
      films={films}
      onClick={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
