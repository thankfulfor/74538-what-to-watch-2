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
  const submitHandler = jest.fn();
  const historyMock = {push: jest.fn()};
  const signIn = shallow(<SignIn history={historyMock} onSignInFormSubmit={submitHandler} />);

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

  expect(submitHandler).toHaveBeenCalledWith(userDataEmailExpected, userDataPasswordExpected);
});
