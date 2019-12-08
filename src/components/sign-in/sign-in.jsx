import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Operation} from '../../operations/operation.js';
import {URLS} from '../../utils/constants.js';
import {Link} from 'react-router-dom';
import Header from '../header/header.jsx';
import {Footer} from '../footer/footer.jsx';

export const SignIn = (props) => {
  const {onSignInFormSubmit, history} = props;

  const mainPageUrl = URLS.MAIN_PAGE_URL;

  const signInFormSubmitHandler = (evt) => {
    evt.preventDefault();
    onSignInFormSubmit(evt.target.userEmail.value, evt.target.userPassword.value);
    history.push(mainPageUrl);
  };

  return (
    <div className="user-page">

      <Header title="Sign in" />

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

      <Footer />
    </div>
  );
};

SignIn.propTypes = {
  onSignInFormSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onSignInFormSubmit: (email, password) => {
      dispatch(Operation.authenticate(email, password));
    }
  });
};

export default connect(null, mapDispatchToProps)(SignIn);
