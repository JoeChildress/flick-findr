import React, { Component } from 'react';
import ResultsList from './ResultsList';
import Typography from '@material-ui/core/Typography';
import instance from '../util/MovieApi';
import requests from '../util/requests';
import MovieModal from './MovieModal';
class NowPlayingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      searchError: false,
      waiting: false,
      selectedMovie: false,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  async componentDidMount() {
    const response = await instance.get(requests.nowPlaying);
    this.setState({ searchResult: response.data.results });
  }

  render() {
    return (
      <div>
        <Typography variant="h5">{this.props.title}</Typography>
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
  handleCloseModal() {
    this.setState({ selectedMovie: false });
  }
  handleItemClick(id) {
    let data = this.getSelectedMovie(id);
    this.setState({
      selectedMovie: data,
      showModal: true,
    });
  }
  getSelectedMovie(id) {
    if (!id) return;
    let movieData =
      this.state.searchResult.filter((movie) => movie.id === id)[0] || {};
    return movieData;
  }
}

export default NowPlayingView;
