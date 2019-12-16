import React from 'react';
import {App} from './app';
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

it(`App корректно рендерится после перезапуска`, () => {
  const handleClick = function () {};
  const tree = shallow(
      <App
        films={films}
        filteredFilms={films}
        onClick={handleClick}
        promoFilm={promoFilm}
      />);
  expect(toJson(tree)).toMatchSnapshot();
});
