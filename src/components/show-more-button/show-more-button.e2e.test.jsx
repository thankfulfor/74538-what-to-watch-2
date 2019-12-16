import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ShowMoreButton} from './show-more-button.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Компонент ShowMoreButton корректно обрабатывает onClick`, () => {
  const handleClick = jest.fn();
  const welcomeScreen = shallow(<ShowMoreButton onClick={handleClick} />);
  const startButton = welcomeScreen.find(`.catalog__button`);

  startButton.simulate(`click`);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
