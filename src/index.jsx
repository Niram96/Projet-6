import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accommodations from './pages/Accommodations';
import Error from './pages/Error';
import './utils/styles/style.scss'
import './fonts/Montserrat-Medium.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route name="home" path="/" element={<Home />}/>
        <Route name="about" path="/about" element={<About />} />
        <Route name="accommodations" path={"/accommodations/:id"} element={<Accommodations />} />
        <Route name="error" path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);