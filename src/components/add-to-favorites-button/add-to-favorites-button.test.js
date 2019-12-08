import React from 'react';
import {AddToFavoritesButton} from './add-to-favorites-button.jsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {BrowserRouter} from 'react-router-dom';

Enzyme.configure({adapter: new Adapter()});

it(`AddToFavoritesButton корректно рендерится после перезапуска`, () => {
  const clickHandler = function () {};

  const tree = mount(
      <BrowserRouter>
        <AddToFavoritesButton
          filmId={0}
          isFavorite={false}
          isLoggedIn={false}
          onFavoriteButtonClick={clickHandler}
        />
      </BrowserRouter>);
  expect(toJson(tree)).toMatchSnapshot();
});
