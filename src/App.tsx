import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GreenAlbumPage from './pages/GreenAlbumPage';
import PurpleAlbumPage from './pages/PurpleAlbumPage';
import RedAlbumPage from './pages/RedAlbumPage';
import CustomCursor from './components/CustomCursor';
import './App.css';
export function App() {
  return <Router>
      <div className="w-full h-screen overflow-hidden app-container">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/green-album" element={<GreenAlbumPage />} />
          <Route path="/purple-album" element={<PurpleAlbumPage />} />
          <Route path="/red-album" element={<RedAlbumPage />} />
        </Routes>
      </div>
    </Router>;
}