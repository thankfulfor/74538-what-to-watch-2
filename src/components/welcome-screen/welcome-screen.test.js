import React from 'react';
import {WelcomeScreen} from './welcome-screen';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

const films = [{
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
}];

const promoFilm = {
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
};

it(`WelcomeScreen корректно рендерится после перезапуска`, () => {
  const clickHandler = function () {};
  const historyMock = {push: jest.fn()};
  const tree = shallow(
      <WelcomeScreen
        history={historyMock}
        avatarUrl={``}
        isLoggedIn={false}
        films={films}
        filteredFilms={films}
        onClick={clickHandler}
        promoFilm={promoFilm}
      />
  );
  expect(toJson(tree)).toMatchSnapshot();
});
