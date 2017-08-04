import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompareTable from './components/CompareTable/CompareTable'
import CompareTableDefaultState from './components/CompareTable/defaultState'

class App extends Component {
  render() {
    return (
      <CompareTable id="compare-talbe__beaty" data={ CompareTableDefaultState } source={ this.props.source } />
    );
  }
}

export default App;
