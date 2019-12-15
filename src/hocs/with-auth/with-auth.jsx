import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {userType} from '../../types/types.js';

import {isObjectEmpty} from '../../utils/is-object-empty.js';
import {URL} from '../../utils/constants.js';

const withAuth = (Component) => {
  class WithAuth extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {userData} = this.props;

      if (isObjectEmpty(userData)) {
        return <Redirect to={URL.LOGIN_PAGE_URL} />;
      }

      return <Component {...this.props} />;
    }
  }

  WithAuth.propTypes = {
    userData: userType,
  };

  const mapStateToProps = (state) => {
    const userData = state.userData;
    return {userData};
  };

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
