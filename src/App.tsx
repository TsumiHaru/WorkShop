import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GreenAlbumPage from './pages/GreenAlbumPage';
import CustomCursor from './components/CustomCursor';
import './App.css';
export function App() {
  return <Router>
      <div className="app-container w-full h-screen overflow-hidden">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/green-album" element={<GreenAlbumPage />} />
        </Routes>
      </div>
    </Router>;
}