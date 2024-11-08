import { useNavigate } from 'react-router-dom'; // Import useNavigate

function GenerateWeather() {
    const navigate = useNavigate();

    const generateWeather = async () => {
        const response = await fetch('http://localhost:5051/api/generateweather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            navigate('/weather');
        } else {
            console.error('Failed to generate weather data');
        }
    };

    return (
        <div>
            <h1>Generate Weather</h1>
            <button onClick={generateWeather}>Generate</button>
        </div>
    );
}

export default GenerateWeather;
