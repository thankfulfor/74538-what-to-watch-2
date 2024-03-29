import React from 'react';
import {Header} from './header.jsx';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`Header рендерится корректно`, () => {
  const historyMock = {push: jest.fn()};
  const tree = shallow(<Header history={historyMock} avatarUrl="" userData={{}} />);

  expect(tree).toMatchSnapshot();
});
