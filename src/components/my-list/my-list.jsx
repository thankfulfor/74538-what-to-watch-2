import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../header/header.jsx';
import {FilmList} from '../film-list/film-list-1.jsx';
import {Footer} from '../footer/footer.jsx';
import {Operation} from '../../operations/operation.js';
import {filmsType, historyType} from '../../types/types.js';

export class MyList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadFavoriteMovies} = this.props;
    onLoadFavoriteMovies();
  }

  render() {
    const {favoriteFilms} = this.props;
    return (
      <div className="user-page">
        <Header title="My list" />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmList films={favoriteFilms} />
        </section>
        <Footer />
      </div>
    );
  }
}

MyList.propTypes = {
  favoriteFilms: filmsType,
  history: historyType,
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
