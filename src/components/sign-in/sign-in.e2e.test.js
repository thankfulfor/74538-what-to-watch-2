import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SignIn} from './sign-in.jsx';

Enzyme.configure({adapter: new Adapter()});

const userDataEmailMock = `email`;
const userDataPasswordMock = `password`;

const userDataEmailExpected = `email`;
const userDataPasswordExpected = `password`;

it(`Компонент SignIn корректно обрабатывает onSignInFormSubmit`, () => {
  const handleSubmit = jest.fn();
  const historyMock = {push: jest.fn(), goBack: jest.fn()};
  const signIn = shallow(<SignIn userData={{}} history={historyMock} onSignInFormSubmit={handleSubmit} />);

  signIn.find(`form`).simulate(`submit`, {
    preventDefault: () => {},
    target: {
      userEmail: {
        value: userDataEmailMock
      },
      userPassword: {
        value: userDataPasswordMock
      },
    },
  });

  expect(handleSubmit).toHaveBeenCalledWith(userDataEmailExpected, userDataPasswordExpected);
});
