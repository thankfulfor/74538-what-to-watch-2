import React from 'react';
import {MyList} from './my-list.jsx';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

it(`MyList корректно рендерится после перезапуска`, () => {
  const historyMock = {push: jest.fn()};
  const handleLoad = jest.fn();
  const tree = shallow(<MyList onLoadFavoriteMovies={handleLoad} favoriteFilms={[]} history={historyMock} />);
  expect(toJson(tree)).toMatchSnapshot();
});
