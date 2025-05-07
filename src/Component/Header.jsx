import { useEffect } from 'react';
import { gsap } from 'gsap';
import '../Styles/Header.css';

function Header() {
  useEffect(() => {
    // Title animation with a more dynamic bounce and fade-in effect
    gsap.fromTo(
      '.title', 
      { opacity: 0, y: -100 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "back.out(1.7)", delay: 0.3 }
    );

    // Desktop navigation animation: slide-in from bottom with staggered effect
    gsap.fromTo(
      '.navigation.pc a', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.2, delay: 0.8 }
    );

    // Mobile navigation logo animation: scale and fade-in with stagger
    gsap.fromTo(
      '.navigation.mb .logo-img', 
      { opacity: 0, scale: 0.5, y: 40 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.2, delay: 1 }
    );

    // Hover effect for desktop navigation links: scale and color transition
    gsap.to('.navigation.pc a', {
      opacity: 0.8,
      scale: 1.1,
      color: "#ff4081", // Color change on hover
      duration: 0.3,
      ease: "power1.out",
      paused: true,
      repeat: -1,
      yoyo: true
    });

    // Hover effect for mobile logo images: scale and opacity change
    gsap.to('.navigation.mb .logo-img', {
      opacity: 0.8,
      scale: 1.1,
      duration: 0.3,
      ease: "power1.out",
      paused: true,
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <div className="header">
      <div className="container-header">
        <div className="title pc">Stevanus Gabriel</div>
        <div className="navigation pc">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navigation mb">
          <a href="#home" className="logo-img"><img src="Home.svg" alt="Home" className="logo" /></a>
          <a href="#about" className="logo-img"><img src="About.svg" alt="About" className="logo" /></a>
          <a href="#portfolio" className="logo-img"><img src="Portfolio.svg" alt="Portfolio" className="logo" /></a>
          <a href="#contact" className="logo-img"><img src="Contact.svg" alt="Contact" className="logo" /></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
