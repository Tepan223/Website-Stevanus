import React, { useEffect, useRef } from "react";
import "../Styles/Portfolio.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const portfolioEl = portfolioRef.current;

    gsap.fromTo(
      portfolioEl.querySelectorAll(".card-portfolio-img"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: portfolioEl,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          // markers: true, // Aktifkan untuk debugging posisi scroll trigger
        },
      }
    );
  }, []);

  return (
    <>
      <div className="portfolio" id="portfolio" ref={portfolioRef}>
        <div className="content-portfolio">
          <h1 className="title-portfolio">My Portfolio</h1>
          <div className="card-portfolio">
            <div className="card-portfolio-img">
              <a href="" className="link-card-portfolio">
                <img src="Portfolio1.png" alt="" className="img-portfolio" />
              </a>
            </div>
            <div className="card-portfolio-img">
              <a href="" className="link-card-portfolio">
                <img src="Portfolio2.png" alt="" className="img-portfolio" />
              </a>
            </div>
            <div className="card-portfolio-img">
              <a href="" className="link-card-portfolio">
                <img src="Portfolio3.png" alt="" className="img-portfolio" />
              </a>
            </div>
            <div className="card-portfolio-img">
              <a href="" className="link-card-portfolio">
                <img src="Portfolio4.png" alt="" className="img-portfolio" />
              </a>
            </div>
            <div className="card-portfolio-img">
              <a href="" className="link-card-portfolio">
                <img src="Portfolio5.png" alt="" className="img-portfolio" />
              </a>
            </div>
            <div className="card-portfolio-img">
              <a href="" className="link-card-portfolio">
                <img src="Portfolio6.png" alt="" className="img-portfolio" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
