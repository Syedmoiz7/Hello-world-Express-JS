import './weather.css';
import { useState } from 'react';
import axios from "axios"


function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [cityName, setCityName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e0f99c494c2ce394a18cc2fd3f100543`)
            .then(response => {
                console.log(response.data);
                setWeatherData(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='mainContainer'>
            <h1>
                Weather App
            </h1>
            <form onSubmit={submitHandler}>
                <input type="text" className='userInput' required placeholder='Enter Your City Name'
                    onChange={(e => (setCityName(e.target.value)))}
                />
            </form>
            {(weatherData === null) ? null :
                <div className="weatherContainer">
                    <div className="renderWeather">
                        <div className="cityName">
                            {weatherData.name}
                        </div>

                        <div className="info">
                            <div className="temp">
                                <div className="mainTemp"><span>Temperature:</span> {Math.round(weatherData?.main?.temp)}°C</div>
                                <div className="minTemp"><span>Min-Temp:</span> {Math.round(weatherData?.main?.temp_min)}°C</div>
                                <div className="minTemp"><span>Max-Temp:</span> {Math.round(weatherData?.main?.temp_max)}°C</div>
                            </div>
                            <div className="hp">
                                <div className="mainTemp"><span>Humidity:</span> {Math.round(weatherData?.main?.humidity)}%</div>
                                <div className="minTemp"><span>Pressure:</span> {Math.round(weatherData?.main?.pressure)}mb</div>
                            </div>
                        </div>
                    </div>
                </div>

            }


        </div>
    )
}

export default Weather;


