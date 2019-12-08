import React from 'react';
import {AddToFavoritesButton} from './add-to-favorites-button.jsx';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

it(`AddToFavoritesButton корректно рендерится после перезапуска`, () => {
  const clickHandler = function () {};
  const historyMock = {push: jest.fn()};
  const tree = shallow(
      <AddToFavoritesButton
        filmId={0}
        history={historyMock}
        isFavorite={false}
        isLoggedIn={false}
        onFavoriteButtonClick={clickHandler}
      />);
  expect(toJson(tree)).toMatchSnapshot();
});
