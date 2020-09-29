import React from 'react'

const WeatherInfo = (props) => {
	//info to know

console.log(props.weatherData)

//unnecessary but will save keystrokes:
const weather = props.weatherData


        //   main: result.main.temp,
        //   description: result.weather[0].description,
        //   min: result.main.temp_min,
        //   max: result.main.temp_max,
        //   name: result.name

	return (
		<div>
            <h1>{weather.name}</h1>
{/* NOT sure why this isn't working
       {{weatherData.main} < 70 ? <h2 className="blue">current temp<br /> {weather.main}</h2> : <h2>current temp<br /> {weather.main}</h2>} */}
			<h2>current temp<br /> {weather.main}</h2>
            <h2>description<br /> {weather.description}</h2>     
            <p>min temp<br /> {weather.min}</p>
            <p>max temp<br /> {weather.max}</p>
		</div>
	);
}

export default WeatherInfo