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

                <FullscreenVideoPlayerWithButtonsWrapped film={promoFilm} />

                <AddToFavoritesButton history={history} filmId={promoFilm.id}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
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
