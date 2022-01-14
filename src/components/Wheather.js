import React from "react";

import Axios from "axios";
import { useState, useEffect } from "react";

const Wheather = (query) => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    console.log(weather);
  }, [weather]);

  const weather_url = `http://api.weatherstack.com/current?access_key=575a5cec6d4d38354039e1fcb72d3030&query=${query.query}`;

  const getWeather = async () => {
    const weather_result = await Axios.get(weather_url);
    setWeather(weather_result);
  };

  return (
    <div>
      <div>
        <button onClick={getWeather}>get weather</button>
      </div>

      {weather && weather.length > 0 ? (
        weather.map((data) => {
          return (
            <div>
              <h1>
                Location : {data.location.country}-{data.location.name}
              </h1>
              <h1>current wind speed : {data.current.wind_speed}</h1>
              <h1>current wind degree : {data.current.wind_degree}</h1>
              <h1>current wind dir : {data.current.wind_dir}</h1>
              <h1>current humidity : {data.current.humidity}</h1>
              <h1>current humidity : {data.current.humidity}</h1>
              <h1>current temperature : {data.current.temperature}</h1>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Wheather;
