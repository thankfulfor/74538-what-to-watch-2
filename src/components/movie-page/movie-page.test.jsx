import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {BrowserRouter} from 'react-router-dom';
import {MoviePage} from './movie-page.jsx';

Enzyme.configure({adapter: new Adapter()});

const film = {
  "name": `The Revenant`,
  "poster_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/poster/Revenant.jpg`,
  "preview_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/revenant.jpg`,
  "background_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/background/Revenant.jpg`,
  "background_color": `#92918B`,
  "description": `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
  "rating": 4,
  "scores_count": 618498,
  "director": `Alejandro G. Iñárritu`,
  "starring": [
    `Leonardo DiCaprio`,
    `Tom Hardy`,
    `Will Poulter`
  ],
  "run_time": 156,
  "genre": `Action`,
  "released": 2015,
  "id": 1,
  "is_favorite": false,
  "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

it(`MoviePage корректно рендерится после перезапуска`, () => {
  const tree = shallow(
      <BrowserRouter>
        <MoviePage film={film} match={{}} />
      </BrowserRouter>
  );
  expect(toJson(tree)).toMatchSnapshot();
});
