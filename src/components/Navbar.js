import React from 'react';
import { connect } from 'react-redux';
import { addMovieToList, handleMovieSearch } from '../actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showSearchResults: false,
      searchText: '',
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;
    // console.log(this.props);
    this.setState({
      showSearchResults: true,
    });

    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { showSearchResults } = this.state;
    const { result } = this.props.search;
    // console.log(this.state);

    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{result.Title}</span>
                  <button onClick={() => this.handleAddToMovies(result)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  // console.log(search);
  return {
    search,
  };
}

const connectedAppComponent = connect(mapStateToProps)(Navbar);
export default connectedAppComponent;
