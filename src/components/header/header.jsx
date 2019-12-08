import * as React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {URLS} from '../../utils/constants.js';
import {connect} from 'react-redux';

export const Header = (props) => {
  const {title, isLoggedIn, avatarUrl} = props;

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to={URLS.MAIN_PAGE_URL} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {title && <h1 className="page-title user-page__title">{title}</h1>}

      <div className="user-block">
        {isLoggedIn
          ?
          <div className="user-block__avatar">
            <Link to={URLS.MY_LIST_URL}><img src={avatarUrl} alt="User avatar" width="63" height="63" /></Link>
          </div>
          : <Link to={URLS.LOGIN_PAGE_URL}>Sign In</Link>
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    avatarUrl: URLS.BASE_URL + state.userData.avatar_url,
    isLoggedIn: state.isLoggedIn
  });
};

export default connect(mapStateToProps)(Header);
