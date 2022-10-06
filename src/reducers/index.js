import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions';

const initialMoviesState = {
  list: [],
  favourites: [],
};

export default function movies(state = initialMoviesState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return action.movies;
  // }

  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_FAVOURITE:
      const filterArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );

      return {
        ...state,
        favourites: filterArray,
      };

    default:
      return state;
  }
}
