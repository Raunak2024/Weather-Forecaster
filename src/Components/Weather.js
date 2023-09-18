import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import cold from "../Assets/cold-bg.jpg";

function Weather() {
  const [city, setCity] = useState("Chabahil");
  const [error, setError] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState({});
  useEffect(() => {
    if (city !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be8cb26cf4bc21eb35ab455b3e8cce73`
        )
        .then(({ data }) => {
          setWeatherInfo((prevState) => {
            return {
              ...prevState,
              city: data.name,
              country: data.sys.country,
              temp: (data.main.temp - 273.15).toFixed(2),
              icon: data.weather[0].icon,
              iconName: data.weather[0].main,
            };
          });
        });
    }
  }, []);
  function hanldeChange(e) {
    setCity(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (city !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be8cb26cf4bc21eb35ab455b3e8cce73`
        )
        .then(({ data }) => {
          console.log(data);
          setError(null);
          setWeatherInfo((prevState) => {
            return {
              ...prevState,
              city: data.name,
              country: data.sys.country,
              temp: (data.main.temp - 273.15).toFixed(2),
              icon: data.weather[0].icon,
              iconName: data.weather[0].main,
            };
          });
        })
        .catch((err) => {
          setError("City Not Found!!");
          throw new Error(err);
        });
    }
  }
  return (
    <div className={weatherInfo.temp > 16 ? "container warm" : "container"}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search City..."
          value={city}
          required
          onChange={(e) => hanldeChange(e)}
        />
        <button type="submit">Search</button>
      </form>
      {error === null ? (
        <WeatherInfo WeatherInfo={weatherInfo} />
      ) : (
        <p id="error_block">{error}</p>
      )}
    </div>
  );
}

export default Weather;
