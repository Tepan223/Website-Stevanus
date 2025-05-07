import { useEffect } from 'react';
import { gsap } from 'gsap';
import '../Styles/Header.css';

function Header() {
  useEffect(() => {
    // Title animation with bounce effect
    gsap.fromTo(
      '.title', 
      { opacity: 0, y: -80 }, 
      { opacity: 1, y: 0, duration: 1, ease: "bounce.out", delay: 0.3 }
    );

    // Desktop navigation animation with slide-in effect
    gsap.fromTo(
      '.navigation.pc a', 
      { opacity: 0, x: -100 }, 
      { opacity: 1, x: 0, duration: 0.8, ease: "power4.out", delay: 0.8 }
    );

    // Mobile navigation logo animation with scale and fade
    gsap.fromTo(
      '.navigation.mb .logo-img', 
      { opacity: 0, scale: 0.5, y: 30 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1 }
    );

    // Hover effect for desktop navigation links
    gsap.to('.navigation.pc a', {
      opacity: 0.7,
      scale: 1.1,
      duration: 0.2,
      ease: "power1.out",
      paused: true,
      repeat: -1,
      yoyo: true
    });

    // Hover effect for mobile logo images
    gsap.to('.navigation.mb .logo-img', {
      opacity: 0.7,
      scale: 1.1,
      duration: 0.2,
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
