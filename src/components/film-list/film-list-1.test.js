import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {FilmList} from './film-list-1.jsx';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const films = [{
  previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
  genre: `drama`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
}];

it(`FilmList корректно рендерится после перезапуска`, () => {
  const tree = shallow(
      <BrowserRouter>
        <FilmList films={films} />
      </BrowserRouter>
  );
  expect(toJson(tree)).toMatchSnapshot();
});
