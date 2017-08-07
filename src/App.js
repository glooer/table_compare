import React, { Component } from 'react';
import './App.css';
import CompareTable from './components/CompareTable/CompareTable'
import CompareTableDefaultState from './components/CompareTable/defaultState'

class App extends Component {
  render() {
    return (
      <CompareTable
				id="compare-talbe__beaty"
				data={ CompareTableDefaultState }
				source={ this.props.source }
				hide_col={ this.props.hide_col }
				sort_col={ this.props.sort_col }
			/>
    );
  }
}

export default App;
