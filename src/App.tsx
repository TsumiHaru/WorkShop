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
          <Route path="/YouDontKnowMePage" element={<YouDontKnowMePage />} />
          <Route path="/PurpleSparklePage" element={<PurpleSparklePage />} />
          <Route path="/HeartAndSoulPage" element={<HeartAndSoulPage />} />
        </Routes>
      </div>
    </Router>;
}