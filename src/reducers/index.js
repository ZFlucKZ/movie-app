export default function (state = [], action) {
  if (action.type === 'ADD_MOVIES') {
    return action.movies;
  }

  return state;
}
