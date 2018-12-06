import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Reducer from './Reducer';
import bcrypt from 'bcryptjs';

const Context = React.createContext(undefined);

export class Provider extends Component {
  state = {
    testMessage: 'No Matter Where You Go There You Are',
    hash: '',
    bufferString: '',
    dispatcher: action => {
      this.setState(state => Reducer(state, action));
    },
    createHash: () => {
      // this creates a hash out of the complete record
      const stringToHash = this.state.testMessage.toString();

      var myBuffer = [];
      var buffer = new Buffer(stringToHash, 'utf16le');
      for (var i = 0; i < buffer.length; i++) {
        myBuffer.push(buffer[i]);
      }

      myBuffer = myBuffer.toString();
      this.setState({ bufferString: myBuffer });

      const salt = bcrypt.genSaltSync(10);
      const newHash = bcrypt.hashSync(myBuffer, salt);

      this.setState({ hash: newHash });
    }
  };

  // static propTypes = {};

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
