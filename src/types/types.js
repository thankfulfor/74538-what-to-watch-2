import PropTypes from 'prop-types';

export const filmType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  runTime: PropTypes.number,
  genre: PropTypes.string,
  released: PropTypes.number,
  isFavorite: PropTypes.bool,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string
}).isRequired;

export const filmsType = PropTypes.arrayOf(filmType).isRequired;

export const userType = PropTypes.shape({
  name: PropTypes.string,
  avatarImg: PropTypes.string,
}).isRequired;

export const historyType = PropTypes.shape({
  goBack: PropTypes.func,
  push: PropTypes.func
}).isRequired;

