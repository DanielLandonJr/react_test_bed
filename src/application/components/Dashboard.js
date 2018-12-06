import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Consumer } from '../data/Context';
import * as Actions from '../data/Actions';

export default class Dashboard extends Component {
  state = {
    testMessage: ''
  };

  // static propTypes = {};

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <div className="container">
                <h3>Dashboard</h3>
                <hr />
                <h6>Test Message (Global State): {value.testMessage}</h6>
                <label htmlFor="testMessage">New Test Message:</label>{' '}
                <input
                  type="text"
                  name="testMessage"
                  value={this.state.testMessage}
                  onChange={this.onChange}
                />{' '}
                <button
                  onClick={() => {
                    value.createHash();
                    value.dispatcher({
                      type: Actions.STATE_UPDATE_TEST_MESSAGE,
                      payload: this.state.testMessage
                    });
                  }}
                >
                  Update Message
                </button>
                <hr />
                <label>hash: {value.hash}</label>
                <br />
                <label>buffer: {value.bufferString}</label>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
