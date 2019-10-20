import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

it(`Компонент WelcomeScreen корректно обрабатывает onClick`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    filmNames={[`Название фильма`]}
    onClick={clickHandler}
  />);

  const startButton = welcomeScreen.find(`.page-header`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
