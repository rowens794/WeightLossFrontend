import React, { Component } from 'react';
import './App.css';
import Header from './Components/HeaderBar/HeaderBar';
import HomePage from './Components/HomePage/HeroSection/HeroSection';
import VideoSection from './Components/HomePage/VideoSection/VideoSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />



      </div>
    );
  }
}

export default App;
