import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';
import logo from '../assets/logocafélado.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'menu', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img 
            src={logo} 
            alt="Cafélado Logo" 
            className="logo" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Botón para móviles */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links de navegación */}
        <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
          <a 
            href="#inicio" 
            className={activeSection === 'inicio' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="#menu" 
            className={activeSection === 'menu' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Menú
          </a>
          <a 
            href="#contacto" 
            className={activeSection === 'contacto' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;