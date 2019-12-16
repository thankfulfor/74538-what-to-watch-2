import React from 'react';
import {AddReview} from './add-review.jsx';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

const film = {
  backgroundColor: ``,
  posterImage: ``,
  backgroundImage: ``,
  name: ``,
  id: 0,
};

it(`AddReview корректно рендерится после перезапуска`, () => {
  const handleClick = function () {};
  const historyMock = {push: jest.fn()};
  const tree = shallow(
      <AddReview
        avatarUrl={``}
        film={film}
        history={historyMock}
        userData={{}}
        onAddReviewSubmit={handleClick}
      />
  );
  expect(toJson(tree)).toMatchSnapshot();
});
