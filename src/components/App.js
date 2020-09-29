import React, { useState } from "react";
import Form from './Form'
import WeatherInfo from './WeatherInfo'

export const App = (props) => {
	//instantiates a state that will handleSubmit on weather app form
	//this allows us to search zip code and change value, starts as EMPTY OBJECT
	const [weatherData, setWeatherData] = useState({});

	const handleSubmit = (zipCode) => {
		console.log('this is handle submit');
		//fetch goes in here, just doing this as placeholder to make sure it works later on
		//my apiKey= b2dda56dad052e27f04065db2c1cd201
		const apiKey = 'b2dda56dad052e27f04065db2c1cd201';
		//okay here goes fetch..
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${apiKey}`
		)
			//this returns promise of obj
      .then((response) => response.json())
      .then(result => {
        //creates an object out of promise
        //assigns each variable a key
        //pass object down to weather info for display
        setWeatherData({
          main: result.main.temp,
          description: result.weather[0].description,
          min: result.main.temp_min,
          max: result.main.temp_max,
          name: result.name
        })
      })
	};

	//info to know
	//main: {temp: 290.28, feels_like: 287.08, temp_min: 289.15, temp_max: 291.48, pressure: 1030, …}
  //name: "Jackson"
  //weather: Array(1)
//        0: {id: 800, main: "Clear", description: "clear sky", icon: "01d"}

	return (
		<>
			<br />
			<Form handleSubmitFromApp={handleSubmit} />
			<WeatherInfo weatherData={weatherData} />
		</>
	);
};