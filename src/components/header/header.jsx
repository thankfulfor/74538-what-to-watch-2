import * as React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userType} from '../../types/types.js';

import {URL} from '../../utils/constants.js';
import {isObjectEmpty} from '../../utils/is-object-empty.js';

import {Logo} from '../logo/logo.jsx';

export const Header = (props) => {
  const {title, userData, avatarUrl} = props;

  return (
    <header className="page-header user-page__head">
      <Logo />

      {title && <h1 className="page-title user-page__title">{title}</h1>}

      <div className="user-block">
        {isObjectEmpty(userData)
          ? <Link to={URL.LOGIN_PAGE_URL}>Sign In</Link>
          : (
            <div className="user-block__avatar">
              <Link to={URL.MY_LIST_URL}><img src={avatarUrl} alt="User avatar" width="63" height="63" /></Link>
            </div>
          )
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  userData: userType,
  avatarUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    avatarUrl: URL.BASE_URL + state.userData.avatar_url,
    userData: state.userData
  });
};

export default connect(mapStateToProps)(Header);
