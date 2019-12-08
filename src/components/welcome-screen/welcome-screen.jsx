import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AddToFavoritesButton from '../add-to-favorites-button/add-to-favorites-button.jsx';
import FullScreenVideoPlayer from '../fullscreen-video-player/full-screen-video-player.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import Header from '../header/header.jsx';
import {PlayButton} from '../play-button/play-button.jsx';

import withOpenCloseButtons from '../../hoc/with-open-close-buttons/with-open-close-buttons.jsx';

import {URLS} from '../../utils/constants.js';

const FullscreenVideoPlayerWithButtonsWrapper = withOpenCloseButtons(FullScreenVideoPlayer, PlayButton);

export const WelcomeScreen = (props) => {
  const {films, promoFilm} = props;

  return (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.background_image} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.poster_image} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.released}</span>
              </p>

              <div className="movie-card__buttons">

                <FullscreenVideoPlayerWithButtonsWrapper />

                <AddToFavoritesButton isFavorite={promoFilm.is_favorite} filmId={promoFilm.id} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <GenreList films={films} />
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

WelcomeScreen.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  promoFilm: PropTypes.object.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    avatarUrl: URLS.BASE_URL + state.userData.avatar_url,
    isLoggedIn: state.isLoggedIn
  });
};

export default connect(mapStateToProps)(WelcomeScreen);
