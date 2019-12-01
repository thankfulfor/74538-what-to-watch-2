import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in.jsx';

it(`Is genre catalog tab rendered`, () => {
  const formSubmitHandler = jest.fn();
  const tree = renderer.create(<SignIn onSignInFormSubmit={formSubmitHandler} />);

  expect(tree).toMatchSnapshot();
});
