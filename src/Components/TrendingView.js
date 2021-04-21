import React, { Component } from 'react';
import ResultsList from './ResultsList';
import Typography from '@material-ui/core/Typography';
import instance from '../util/MovieApi';
import requests from '../util/requests';
import MovieModal from './MovieModal';
//TODO: sort by data.vote_average

class TrendingView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: [],
      searchError: false,
      waiting: false,
      selectedMovie: false,
    };
    this.handleData = this.handleData.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleData(data) {
    console.log('handleData called', data);
    this.setState({ searchResult: data });
    this.setState({ waiting: false });
  }

  async componentDidMount() {
    const response = await instance.get(requests.trending);
    this.setState({ searchResult: response.data.results });
  }

  render() {
    console.log('this.state.searchResult.length', this.state);
    return (
      <div>
        <Typography variant="h5">{this.props.title}</Typography>
        {this.state.searchResult.length > 0 && (
          <div>
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
        )}
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
}

export default TrendingView;
