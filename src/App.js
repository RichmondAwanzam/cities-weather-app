import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherHome from './containers/weather-home'
class App extends Component {
  render() {
    return (
      <div className="App">
      
        <WeatherHome />
      </div>
    );
  }
}

export default App;
