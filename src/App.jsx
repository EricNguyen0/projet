import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Loading.css'; // Importer le fichier CSS de Loading
import './Navbar.css'; // Importer le fichier CSS de Navbar
import ParticleBackground from './ParticleBackground'; // Importer le composant ParticleBackground PARTICLE JS (Fond d'écran animé)
import ThreeScene from './ThreeScene'; // Importer le composant ThreeScene
import BackToTopButton from './BackToTopButton'; // Import the BackToTopButton component

import CardContainer from './Cardcontainer'; // Importer le composant CardContainer
import ContactForm from './ContactForm'; // Import the ContactForm component
// App Component

export default function App() {
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Simuler le delai pour loader la page
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconde de delai

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Afficher le loader si loading est true
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </div>
    );
  }
 // Afficher le contenu de la page si loading est false
 return (
  <div>
    {/* SCROLLTOSECTION va vers la bonne place */}
    <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <ParticleBackground />
      </div>
      {/* SCENE MINI ROOM ERIC */}
      <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 3 }}>
      <Spline scene="https://prod.spline.design/78I9b0oGnBDHEZkQ/scene.splinecode" />
      </div>
      <div ref={aboutRef} style={{ position: 'relative', width: '100%', height: '100%', zIndex: 2 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <ThreeScene />
        </div>
        {/* SCENE ABOUT */}
        <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 2 }}>
          <Spline scene="https://prod.spline.design/Wgn0X0g3XPPHxgKJ/scene.splinecode" />
        </div>
      </div>
      {/* SECTION PROJET */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', zIndex: 4 }}>
        <div ref={projectsRef} style={{ flex: '1 0 auto', position: 'relative', width: '100%', zIndex: 4 }}>
          <CardContainer />
        </div>
        {/* SECTION CONTACT */}
        <div ref={contactRef} style={{ flex: '0 0 auto', position: 'relative', width: '100%', zIndex: 5, marginTop: 'auto' }}>
          <ContactForm />
        </div>
      </div>
    </div>
    <BackToTopButton /> {/* Add the BackToTopButton component */}
  </div>
);
}

// Navbar Component
function Navbar({ scrollToSection, aboutRef, projectsRef, contactRef }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir et fermer le menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effet pour l'animation du titre
  // POUR NEX.Dev
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    document.querySelector("h1").onmouseover = event => {  
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    };
  }, []);
  // Fin Effet pour l'animation du titre

  // Navbar Component JSX
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* (Nguyen + Experience) */}
        <h1 data-value="NEX.Dev">NEX.Dev</h1>
      </div>
      {/* BUTTON BURGER */}
      <label className="hamburger">
        <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
        <svg viewBox="0 0 32 32">
          <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      {/* NAVIGATION */}
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="#about" onClick={() => scrollToSection(aboutRef)}>
            <FontAwesomeIcon icon={faUser} className="fa-icon" /> 
            <span>A</span><span>b</span><span>o</span><span>u</span><span>t</span>
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => scrollToSection(projectsRef)}>
            <FontAwesomeIcon icon={faProjectDiagram} className="fa-icon" /> 
            <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>t</span><span>s</span>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection(contactRef)}>
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> 
            <span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}