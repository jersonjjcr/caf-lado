import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BannerCarousel from './components/bannercarrusel'; // nuevo componente
import Menu from './components/Menu';
import WhatsappButton from './components/WhatsappButton';

function App() {
  return (
    <div className="app">
      <Navbar />
      <BannerCarousel /> {/* reemplaza el Banner anterior */}
      <Menu />
      <WhatsappButton />
    </div>
  );
}

export default App;
