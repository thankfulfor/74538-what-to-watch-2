import React from 'react';
import {AddToFavoritesButton} from './add-to-favorites-button.jsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from 'react-router-dom';

Enzyme.configure({adapter: new Adapter()});

const userDataMock = {
  // eslint-disable-next-line camelcase
  avatar_url: `/wtw/static/avatar/5.jpg`,
  email: `dfkds@sdklfd.ru`,
  id: 1,
  name: `dfkds`
};

const filmIdExpected = 0;
const isFavoriteExpected = 1;

it(`AddToFavoritesButton корректно обрабатывает onFavoriteButtonClick`, () => {
  // eslint-disable-next-line no-console
  const handleClick = jest.fn();
  const historyMock = {push: jest.fn()};
  const addToFavoritesButton = mount(
      <BrowserRouter>
        <AddToFavoritesButton
          filmId={0}
          history={historyMock}
          isFavorite={false}
          userData={userDataMock}
          onFavoriteButtonClick={handleClick}
        />
      </BrowserRouter>
  );
  const button = addToFavoritesButton.find(`button`);
  button.simulate(`click`);
  expect(handleClick).toHaveBeenCalledWith(filmIdExpected, isFavoriteExpected);
});
