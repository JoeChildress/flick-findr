import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import { fade, makeStyles } from '@material-ui/core/styles';
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

  //   <InputBase
  //   placeholder="Search…"
  //   classes={{
  //     root: this.classes.inputRoot,
  //     input: this.classes.inputInput,
  //   }}
  //   inputProps={{ 'aria-label': 'search' }}
  // />
  // classes = this.useStyles();
  // useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
  //   title: {
  //     flexGrow: 1,
  //     display: 'none',
  //     [theme.breakpoints.up('sm')]: {
  //       display: 'block',
  //     },
  //   },
  //   search: {
  //     position: 'relative',
  //     borderRadius: theme.shape.borderRadius,
  //     backgroundColor: fade(theme.palette.common.white, 0.15),
  //     '&:hover': {
  //       backgroundColor: fade(theme.palette.common.white, 0.25),
  //     },
  //     marginLeft: 0,
  //     width: '100%',
  //     [theme.breakpoints.up('sm')]: {
  //       marginLeft: theme.spacing(1),
  //       width: 'auto',
  //     },
  //   },
  //   searchIcon: {
  //     padding: theme.spacing(0, 2),
  //     height: '100%',
  //     position: 'absolute',
  //     pointerEvents: 'none',
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   inputRoot: {
  //     color: 'inherit',
  //   },
  //   inputInput: {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('sm')]: {
  //       width: '12ch',
  //       '&:focus': {
  //         width: '20ch',
  //       },
  //     },
  //   },
  // }));
}

export default SearchView;
