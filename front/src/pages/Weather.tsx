import { useState, useEffect } from 'react';

interface Weather {
    date: string;
    temperatureC: number;
    summary: string;
}

function Weather() {
    const [weatherData, setWeatherData] = useState<Weather[]>([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await fetch('http://backend:8080/api/weather');
            if (response.ok) {
                const data: Weather[] = await response.json();
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
