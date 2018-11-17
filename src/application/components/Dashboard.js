import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../data/Context';

export default class Dashboard extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <h3>Dashboard</h3>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
