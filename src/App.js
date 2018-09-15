import React, { Component } from 'react';
import './App.css';
import StationList from './StationList/StationList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
        <StationList />
      </div>
    );
  }
}

export default App;
