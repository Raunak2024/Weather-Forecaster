import React, { useState } from "react";
import "./WeatherInfo.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function WeatherInfo({ WeatherInfo }) {
  const [date, setDate] = useState({
    dayName: days[new Date().getDay()],
    day: new Date().getDate().toString(),
    month: months[new Date().getMonth()],
    year: new Date().getFullYear().toString(),
  });

  return (
    <div className="weather__info">
      <div className="weather_content_header">
        <p>
          {WeatherInfo.city}, {WeatherInfo.country}
        </p>
        <p>
          {date.dayName} {date.day} {date.month} {date.year}
        </p>
      </div>
      <p>
        {WeatherInfo.temp}
        <sup>°</sup>C
      </p>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${WeatherInfo.icon}.png`}
          alt="weather icon"
        />
        <p style={{ margin: 0, color: "#fff", fontSize: "1.2rem" }}>
          {WeatherInfo.iconName}
        </p>
      </div>
    </div>
  );
}

export default WeatherInfo;
