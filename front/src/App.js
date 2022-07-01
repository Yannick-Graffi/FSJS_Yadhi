// import logo from './Logo.png';
import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Logements from './pages/Logements';
import Publication from './pages/Publication';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Logement" element={<Logements />} />
          <Route path="/Publication" element={<Publication />} />
        </Routes>
      </BrowserRouter>
    </div>
        );
}

export default App;
