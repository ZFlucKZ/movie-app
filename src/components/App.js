import React from 'react';
import { connect } from 'react-redux';
import { data } from '../data';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      // found the movie
      return true;
    }

    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies, search } = this.props.store.getState(); // {movies: {}, search: {}}
    const { list, favourites, showFavourite } = movies;
    console.log('RENDER', this.props.store.getState());

    const displayMovies = showFavourite ? favourites : list;

    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourite ? '' : 'active-tabs'}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourite ? 'active-tabs' : ''}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function callback(state) {
  // console.log(state);
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connectedComponent = connect(callback)(App);
export default connectedComponent;
