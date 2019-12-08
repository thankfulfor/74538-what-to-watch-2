import React from 'react';
import {Footer} from './footer.jsx';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`Footer отрисовывается корректно`, () => {
  const historyMock = {push: jest.fn()};
  const tree = shallow(<Footer history={historyMock} />);

  expect(tree).toMatchSnapshot();
});
