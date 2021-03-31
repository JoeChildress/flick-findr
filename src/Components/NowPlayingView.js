import React, { Component } from 'react';
import ResultsList from './ResultsList';
import Typography from '@material-ui/core/Typography';
import instance from '../util/MovieApi';
import requests from '../util/requests';

class NowPlayingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      searchError: false,
      waiting: false,
    };
  }

  async componentDidMount() {
    console.log('listView mounted');
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
        />
      </div>
    );
  }
}

export default NowPlayingView;
