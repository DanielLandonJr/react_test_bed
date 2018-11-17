import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext(undefined);

export class Provider extends Component {
  state = {
    testMessage: 'Test Message'
  };

  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
