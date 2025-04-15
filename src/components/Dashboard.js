// components/Dashboard.js
import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './Dashboard.css';

function Dashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b941eb188fb234f432c56169c36ca92c&units=metric`
      );
      setWeather(res.data);
      setError(null);
    } catch (err) {
      setWeather(null);
      setError('City not found. Please try again.');
    }
  };

  return (
    <div className="dashboard-container">
      <h1>🌦️ Weather Dashboard</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default Dashboard;

