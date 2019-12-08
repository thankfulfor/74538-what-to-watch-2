import React from 'react';
import {AddToFavoritesButton} from './add-to-favorites-button.jsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from 'react-router-dom';

Enzyme.configure({adapter: new Adapter()});

const filmIdExpected = 0;
const isFavoriteExpected = 1;

it(`AddToFavoritesButton корректно обрабатывает onFavoriteButtonClick`, () => {
  // eslint-disable-next-line no-console
  const clickHandler = jest.fn();
  const historyMock = {push: jest.fn()};
  const addToFavoritesButton = mount(
      <BrowserRouter>
        <AddToFavoritesButton
          filmId={0}
          history={historyMock}
          isFavorite={false}
          isLoggedIn={true}
          onFavoriteButtonClick={clickHandler}
        />
      </BrowserRouter>
  );
  const button = addToFavoritesButton.find(`button`);
  button.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledWith(filmIdExpected, isFavoriteExpected);
});
