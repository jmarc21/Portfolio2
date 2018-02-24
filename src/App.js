import React, { Component } from 'react';
import './App.css';
import Home from '../src/components/home/Home';
import Header from '../src/components/header/header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
       {Routes}
      </div>
    );
  }
}

export default App;
