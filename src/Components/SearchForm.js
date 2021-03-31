import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class SearchForm extends Component {
  render() {
    console.log('search form props', this.props);
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Title Keyword"
            variant="outlined"
            onChange={(e) => this.props.setQuery(e.target.value)}
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            await this.props.search();
          }}
        >
          Search
        </Button>
      </div>
    );
  }
}

export default SearchForm;
