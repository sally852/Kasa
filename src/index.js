import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import About from './pages/About';
import Navbar from './components/Navbar';
import PageFooter from './components/PageFooter';
import Appart from './pages/Appart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/appart/:id" element={<Appart />} /> 
        </Routes>  
        <PageFooter/> 
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
