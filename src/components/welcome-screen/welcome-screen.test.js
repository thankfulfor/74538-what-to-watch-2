import React from 'react';
import renderer from 'react-test-renderer';
import {WelcomeScreen} from './welcome-screen';

const films = [{
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
}];

it(`WelcomeScreen корректно рендерится после перезапуска`, () => {
  const clickHandler = function () {};
  const tree = renderer
    .create(
        <WelcomeScreen
          films={films}
          onClick={clickHandler}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
