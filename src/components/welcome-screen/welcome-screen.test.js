import React from 'react';
import renderer from 'react-test-renderer';
import {WelcomeScreen} from './welcome-screen';

it(`WelcomeScreen корректно рендерится после перезапуска`, () => {
  const clickHandler = function () {};
  const tree = renderer
    .create(<WelcomeScreen
      filmNames={[`Название фильма`]}
      onClick={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
