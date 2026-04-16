// Weather Dashboard App Component
import React from 'react';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar />
      <CurrentWeather />
      <Forecast />
    </div>
  );
};

export default App;