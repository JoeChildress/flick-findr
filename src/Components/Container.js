import React, { Component } from 'react';
import NowPlayingView from './NowPlayingView';
import TrendingView from './TrendingView';
import SearchView from './SearchView';
import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'fontsource-roboto';

class Container extends Component {
  render() {
    return (
      <Router>
        <main>
          <CssBaseline />
          <Header />
          <Switch>
            <Route exact path="/">
              <SearchView />
            </Route>
            <Route path="/now-playing">
              <NowPlayingView title={'Now Playing'} searchType={'nowPlaying'} />
            </Route>
            <Route path="/trending">
              <TrendingView title={'Trending Movies'} searchType={'trending'} />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default Container;
