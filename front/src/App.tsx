import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Weather from './pages/Weather';
import Home from './pages/Home';
import GenerateWeather from './pages/GenerateWeather';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/generateweather">Generate weather</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/generateweather" element={<GenerateWeather />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
