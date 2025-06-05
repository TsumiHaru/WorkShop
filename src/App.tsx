import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import YouDontKnowMePage from './pages/YouDontKnowMePage';
import PurpleSparklePage from './pages/PurpleSparklePage';
import HeartAndSoulPage from './pages/HeartAndSoulPage';
import CustomCursor from './components/CustomCursor';
import './App.css';
export function App() {
  return <Router>
      <div className="w-full h-screen overflow-hidden app-container">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/green-album" element={<YouDontKnowMePage />} />
          <Route path="/purple-album" element={<PurpleSparklePage />} />
          <Route path="/red-album" element={<HeartAndSoulPage />} />
        </Routes>
      </div>
    </Router>;
}