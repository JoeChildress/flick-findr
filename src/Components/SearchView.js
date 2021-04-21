import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import Typography from '@material-ui/core/Typography';
import instance from '../util/MovieApi';
import requests from '../util/requests';
import MovieModal from './MovieModal';

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      waiting: false,
      searchError: false,
      query: '',
      selectedMovie: false,
    };
    this.search = this.search.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  render() {
    return (
      <div>
        <Typography variant="h5">Movie Search</Typography>
        {/*<Typography variant="subtitle1">Search for a movie title</Typography>*/}
        <SearchForm search={this.search} setQuery={this.setQuery} />
        <ResultsList
          searchData={this.state.searchResult}
          waiting={this.state.waiting}
          error={this.state.error}
          handleItemClick={this.handleItemClick}
        />
        <MovieModal
          selectedMovie={this.state.selectedMovie}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
  handleItemClick(id) {
    let data = this.getSelectedMovie(id);
    this.setState({
      selectedMovie: data,
      showModal: true,
    });
  }

  handleCloseModal() {
    this.setState({ selectedMovie: false });
  }

  getSelectedMovie(id) {
    if (!id) return;
    let movieData =
      this.state.searchResult.filter((movie) => movie.id === id)[0] || {};
    return movieData;
  }

  setQuery(value) {
    this.setState({ query: value });
  }
  async search() {
    const response = await instance.get(
      requests.search + '&query=' + this.state.query
    );
    this.setState({ searchResult: response.data.results });
  }
}

export default SearchView;
