import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import GalleryPhotos from './pages/GalleryPhotos';
import Catalog from './pages/Catalog';
import Advertising from './pages/Advertising';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='galleryPhotos' element={<GalleryPhotos />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='advertising' element={<Advertising />} />
        </Routes>
      </div>
  );
}

export default App;
