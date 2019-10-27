import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FilmCard} from './film-card';

Enzyme.configure({adapter: new Adapter()});

const film = {
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
};

it(`Компонент FilmCard корректно обрабатывает onHover`, () => {
  const mouseEnterHandler = jest.fn();

  const filmCard = mount(
      <FilmCard
        onHover={mouseEnterHandler}
        key={`${film.name}`}
        film={film}
      />
  );

  filmCard.simulate(`mouseEnter`);
  expect(mouseEnterHandler).toHaveBeenCalledWith(film);
});
