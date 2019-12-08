import React from 'react';
import {ShowMoreButton} from './show-more-button.jsx';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`ShowMoreButton rendered`, () => {
  const clickHandler = jest.fn();
  const historyMock = {push: jest.fn()};
  const tree = shallow(<ShowMoreButton history={historyMock} onClick={clickHandler} />);

  expect(tree).toMatchSnapshot();
});
