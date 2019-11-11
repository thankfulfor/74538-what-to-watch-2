import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreTab} from "./genre-tab";

Enzyme.configure({adapter: new Adapter()});

const genres = [`All genres`];

it(`Компонент GenreTab корректно обрабатывает onTabClick`, () => {
  const clickHandler = jest.fn();
  const genreTab = shallow(
      <GenreTab
        genres={genres}
        onTabClick={clickHandler}
      />
  );

  const links = genreTab.find(`.catalog__genres-link`);
  links.forEach((link) => link.simulate(`click`, {
    preventDefault: () => {},
    target: {
      textContent: genres
    }
  }));

  expect(clickHandler).toHaveBeenCalledWith(genres);
});
