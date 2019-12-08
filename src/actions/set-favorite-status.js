import {ActionTypes, initialState} from '../utils/constants.js';

const setFavoriteStatus = (updatedFilm, state = initialState.films) => {
  const index = state.findIndex((film) => film.id === updatedFilm.id);

  if (index !== -1) {
    // eslint-disable-next-line camelcase
    state[index].is_favorite = updatedFilm.is_favorite;
  }
};


export const setFavoriteStatusAction = (updatedFilm, state = initialState.films) => ({
  type: ActionTypes.ADD_TO_FAVORITE,
  payload: setFavoriteStatus(updatedFilm, state),
});
