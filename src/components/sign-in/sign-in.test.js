import React from 'react';
import {SignIn} from './sign-in.jsx';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`SignIn рендерится корректно`, () => {
  const historyMock = {push: jest.fn()};
  const tree = shallow(<SignIn userData={{}} history={historyMock} onSignInFormSubmit={() => {}} />);

  expect(tree).toMatchSnapshot();
});
