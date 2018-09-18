import React, { Component } from 'react';
import './styles/App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div style={{margin: '0', padding: '0', position: 'relative', top: '10px'}}>
        <Home />
      </div>
    );
  }
}

export default App;
