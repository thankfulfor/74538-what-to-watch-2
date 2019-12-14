import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {isObjectEmpty} from '../../utils/is-object-empty.js';

import {getFilmByIdFromUrl, getFilteredFilms} from '../../selector/selectors.js';

import AddToFavoritesButton from '../add-to-favorites-button/add-to-favorites-button.jsx';
import FilmReviews from '../../components/film-reviews/film-reviews.jsx';
import FullScreenVideoPlayer from '../fullscreen-video-player/full-screen-video-player.jsx';
import Header from '../header/header.jsx';
import {FilmDetails} from '../../components/film-details/film-details.jsx';
import {FilmList} from '../film-list/film-list-1.jsx';
import {FilmOverview} from '../../components/film-overview/film-overview.jsx';
import {FilmTabs} from '../film-tabs/film-tabs.jsx';
import {Footer} from '../footer/footer.jsx';
import {PlayButton} from '../play-button/play-button.jsx';

import withOpenCloseButtons from '../../hoc/with-open-close-buttons/with-open-close-buttons.jsx';
import withActiveTab from '../../hoc/with-active-tab/with-active-tab.jsx';

import {history} from '../../history.js';
import {CountConstants, URLS} from '../../utils/constants.js';

const FullscreenVideoPlayerWithButtonsWrapped = withOpenCloseButtons(FullScreenVideoPlayer, PlayButton);
const FilmTabsWrapped = withActiveTab(FilmTabs, FilmDetails, FilmOverview, FilmReviews);

export const MoviePage = (props) => {
  const {film, similarFilms, userData} = props;

  if (isObjectEmpty(film)) {
    return null;
  }

  const {
    background_image: backgroundImage,
    name,
    genre,
    released,
    poster_image: posterImage,
    background_color: backgroundColor,
    id
  } = film;

  const style = {
    backgroundColor: `${backgroundColor}`,
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={style}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">

                <FullscreenVideoPlayerWithButtonsWrapped film={film} />
                <AddToFavoritesButton history={history} filmId={film.id}/>

                {!(Object.entries(userData).length === 0 && userData.constructor === Object) &&
                  <Link to={`${URLS.FILMS_URL}/${id}/review`} className="btn movie-card__button">Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>
            <FilmTabsWrapped film={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  film: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  similarFilms: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired,
};

const mapStateToProps = (state, {match}) => {
  const film = getFilmByIdFromUrl(state, match.params.id);
  const similarFilms = getFilteredFilms(state.films, film.genre, CountConstants.COUNT_MORE_LIKE_THIS);
  const userData = state.userData;

  return {film, similarFilms, userData};
};

export default connect(mapStateToProps)(MoviePage);
