import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {history} from '../../history.js';

import AddToFavoritesButton from '../add-to-favorites-button/add-to-favorites-button.jsx';
import FullScreenVideoPlayer from '../fullscreen-video-player/full-screen-video-player.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import Header from '../header/header.jsx';
import {Footer} from '../footer/footer.jsx';
import {PlayButton} from '../play-button/play-button.jsx';

import withOpenCloseButtons from '../../hoc/with-open-close-buttons/with-open-close-buttons.jsx';

import {URLS} from '../../utils/constants.js';

const FullscreenVideoPlayerWithButtonsWrapped = withOpenCloseButtons(FullScreenVideoPlayer, PlayButton);

export const WelcomeScreen = (props) => {
  const {films, promoFilm} = props;

  if (promoFilm === undefined || (Object.entries(promoFilm).length === 0 && promoFilm.constructor === Object)) {
    return null;
  }

  const {
    background_image: backgroundImage,
    background_color: backgroundColor,
    name,
    poster_image: posterImage,
    genre,
    released,
    id
  } = promoFilm;

  return (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">

                <FullscreenVideoPlayerWithButtonsWrapped film={promoFilm} />

                <AddToFavoritesButton history={history} filmId={id}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content" style={{backgroundColor: {backgroundColor}}}>
        <GenreList films={films} />
        <Footer />
      </div>
    </div>
  );
};

WelcomeScreen.propTypes = {
  films: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    avatarUrl: URLS.BASE_URL + state.userData.avatar_url,
    isLoggedIn: state.isLoggedIn,
    films: state.films,
    promoFilm: state.promoFilm
  });
};

export default connect(mapStateToProps)(WelcomeScreen);
