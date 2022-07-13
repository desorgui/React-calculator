import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CalculatorPage from './components/pages/CalculatorPage';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
