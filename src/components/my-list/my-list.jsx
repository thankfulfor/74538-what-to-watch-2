import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../header/header.jsx';
import {FilmList} from '../film-list/film-list-1.jsx';
import {Footer} from '../footer/footer.jsx';
import {Operation} from '../../operations/operation.js';

export const MyList = (props) => {
  const {favoriteFilms, onLoadFavoriteMovies} = props;
  onLoadFavoriteMovies();

  if (favoriteFilms === undefined) {
    return null;
  }

  return (
    <React.Fragment>

      <div className="user-page">
        <Header title="My list"/>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmList films={favoriteFilms} />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

MyList.propTypes = {
  favoriteFilms: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  onLoadFavoriteMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    favoriteFilms: state.favoriteFilms,
  });
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteMovies: bindActionCreators(Operation.loadFavoriteFilms, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
