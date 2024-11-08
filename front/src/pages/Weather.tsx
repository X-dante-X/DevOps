import { useState, useEffect } from 'react';

function Weather() {
    const [weatherData, setWeatherData] = useState([]);
    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await fetch('http://localhost:5051/api/weather');
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                console.error('Failed to fetch weather data');
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <div>
            <h1>Weather Data</h1>
            {weatherData.length > 0 ? (
                <ul>
                    {weatherData.map((weather, index) => (
                        <li key={index}>
                            <strong>Date:</strong> {weather.date} - <strong>Temp:</strong> {weather.temperatureC}°C - <strong>Summary:</strong> {weather.summary}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No weather data available.</p>
            )}
        </div>
    );
}

export default Weather;
