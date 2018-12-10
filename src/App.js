import React, { Component } from 'react';
import './App.css';
import WeatherHome from './containers/weather-home'
class App extends Component {
  render() {
    return (
      <div className="App">
      
      <div className="app-content">
      <WeatherHome />
      </div>
       
      </div>
    );
  }
}

export default App;
