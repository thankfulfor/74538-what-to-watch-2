import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import AddReview from '../add-review/add-review.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import MyList from '../my-list/my-list.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

import withAuth from '../../hoc/with-auth/with-auth.jsx';

import {URLS} from '../../utils/constants.js';

import withShowItem from '../../hoc/with-show-item/with-show-item.jsx';

const WelcomeScreenWrapped = withShowItem(WelcomeScreen);

export const App = (props) => {
  const {films, promoFilm} = props;

  if (films.length === 0 || promoFilm === undefined) {
    return null;
  }

  return (
    <Switch>
      <Route exact path={URLS.MAIN_PAGE_URL} component={WelcomeScreenWrapped} />
      <Route exact path={URLS.LOGIN_PAGE_URL} component={SignIn} />
      <Route exact path={URLS.MY_LIST_URL} component={withAuth(MyList)} />
      <Route exact path={URLS.FILM_PAGE_URL} component={MoviePage}/>
      <Route exact path={URLS.ADD_REVIEW_PAGE_URL} component={withAuth(AddReview)}/>
    </Switch>
  );
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    films: state.films,
    promoFilm: state.promoFilm,
  });
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
