import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import withShowItem from '../../hoc/with-show-item/with-show-item.jsx';
import SignIn from '../sign-in/sign-in.jsx';

const WelcomeScreenWrapped = withShowItem(WelcomeScreen);

export const App = (props) => {
  const {films, onClick, promoFilm, isAuthorizationRequired} = props;

  if (films.length === 0 || promoFilm === undefined) {
    return null;
  }

  return (
    <React.Fragment>
      {isAuthorizationRequired
        ? <SignIn />
        : (<WelcomeScreenWrapped
          films={films}
          onClick={onClick}
          promoFilm={promoFilm}
        />)
      }
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    films: state.films,
    promoFilm: state.promoFilm,
    isAuthorizationRequired: state.isAuthorizationRequired
  });
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  promoFilm: PropTypes.object.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
