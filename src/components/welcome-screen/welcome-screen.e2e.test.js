import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

const promoFilm = {
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
};

it(`Компонент WelcomeScreen корректно обрабатывает onClick`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    films={[`Название фильма`]}
    promoFilm={promoFilm}
    avatarUrl={``}
    isLoggedIn={false}
    onClick={clickHandler}
    filteredFilms={[`Название фильма`]}
  />);

  const startButton = welcomeScreen.find(`.page-header`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
