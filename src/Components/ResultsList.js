import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TheatersIcon from '@material-ui/icons/Theaters';

//TODO: Add progress indicator when no data that works with search

class ResultsList extends Component {
  render() {
    //console.log('Results list props:', this.props);
    const renderResultsSection = () => {
      // if (this.props.searchData.length <= 0 && !this.props.error) {
      //   return <CircularProgress />;
      // } else
      if (this.props.error) {
        return <div>{this.props.error}</div>;
      } else {
        return (
          <List>
            {this.props.searchData.map((data) => (
              <ListItem
                button
                // selected={selectedIndex === 0}
                onClick={(event) => this.props.handleItemClick(data.id)}
                key={data.id}
              >
                <ListItemIcon>
                  <TheatersIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`${data.original_title}: ${this.getYear(
                    data.release_date
                  )}`}
                />
              </ListItem>
            ))}
          </List>
        );
      }
    };

    return <div>{renderResultsSection()}</div>;
  }
  getYear(date) {
    if (!date) return 'NA';
    return date.split('-')[0] || 'NA';
  }
}

export default ResultsList;
