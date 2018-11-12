import React, { Component } from 'react';
import './App.css';
import Header from './Components/HeaderBar/HeaderBar';
import HomePage from './Components/HomePage/HomePage';
import FooterBar from './Components/FooterBar/FooterBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <FooterBar />
      </div>
    );
  }
}

export default App;
