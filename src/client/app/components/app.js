import React from 'react';
import { Component } from 'react';

import Game from '../containers/game';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> Which Kim Wins? </h1>
        {this.props.children}
      </div>
    );
  }
}
