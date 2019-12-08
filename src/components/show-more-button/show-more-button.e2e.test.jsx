import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ShowMoreButton} from './show-more-button.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Компонент ShowMoreButton корректно обрабатывает onClick`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<ShowMoreButton onClick={clickHandler} />);
  const startButton = welcomeScreen.find(`.catalog__button`);

  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
