import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import Typography from '@material-ui/core/Typography';
import instance from '../util/MovieApi';
import requests from '../util/requests';

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      waiting: false,
      searchError: false,
      query: '',
      selectedMovie: {},
    };
    this.search = this.search.bind(this);
    this.setQuery = this.setQuery.bind(this);
  }
  render() {
    return (
      <div>
        <Typography variant="h5">Movie Search</Typography>
        <Typography variant="subtitle1">Search for a movie title</Typography>
        <SearchForm search={this.search} setQuery={this.setQuery} />
        <ResultsList
          searchData={this.state.searchResult}
          waiting={this.state.waiting}
          error={this.state.error}
        />
      </div>
    );
  }

  setQuery(value) {
    console.log('query', this.state.query);
    this.setState({ query: value });
  }
  async search() {
    console.log('search is happening');
    const response = await instance.get(
      requests.search + '&query=' + this.state.query
    );
    console.log('search data', response);
    this.setState({ searchResult: response.data.results });
  }
}

export default SearchView;
