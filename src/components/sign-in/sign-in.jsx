import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Operation} from '../../operations/operation.js';

export const SignIn = (props) => {
  const {onSignInFormSubmit} = props;

  const signInFormSubmitHandler = (evt) => {
    evt.preventDefault();
    onSignInFormSubmit(evt.target.userEmail.value, evt.target.userPassword.value);
  };

  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">F</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={signInFormSubmitHandler}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input required className="sign-in__input" type="email" placeholder="Email address" name="userEmail" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input required className="sign-in__input" type="password" placeholder="Password" name="userPassword" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">F</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

SignIn.propTypes = {
  onSignInFormSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onSignInFormSubmit: (email, password) => {
      dispatch(Operation.authenticate(email, password));
    }
  });
};

export default connect(null, mapDispatchToProps)(SignIn);
