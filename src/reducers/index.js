import { ADD_MOVIES, ADD_FAVOURITE } from '../actions';

const initialMoviesState = {
  list: [],
  favourites: [],
};

export default function movies(state = [], action) {
  if (action.type === ADD_MOVIES) {
    return action.movies;
  }

  return state;
}
