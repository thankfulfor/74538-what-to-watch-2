import * as React from 'react';
import PropTypes from 'prop-types';
import GenreList from '../genre-list/genre-list.jsx';
import FullScreenVideoPlayer from '../fullscreen-video-player/full-screen-video-player.jsx';
import {PlayButton} from '../play-button/play-button.jsx';
import withOpenCloseButtons from '../../hoc/with-open-close-buttons/with-open-close-buttons.jsx';

const FullscreenVideoPlayerWithButtonsWrapper = withOpenCloseButtons(FullScreenVideoPlayer, PlayButton);

export const WelcomeScreen = (props) => {
  const {films, onClick} = props;

  return (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={films[0].backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head" onClick={onClick}>
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={films[0].posterImage} alt={films[0].name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{films[0].name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{films[0].genre}</span>
                <span className="movie-card__year">{films[0].released}</span>
              </p>

              <div className="movie-card__buttons">

                <FullscreenVideoPlayerWithButtonsWrapper />

                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <GenreList allFilms={films} />
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
};
