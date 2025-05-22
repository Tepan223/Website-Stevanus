import React, { useEffect, useRef } from "react";
import "../Styles/Contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const contactEl = contactRef.current;

    gsap.fromTo(
      contactEl.querySelector(".contact-form"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactEl.querySelector(".contact-form"),
          start: "top 80%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      contactEl.querySelector(".contact-info"),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactEl.querySelector(".contact-info"),
          start: "top 80%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="contact" id="contact" ref={contactRef}>
        <div className="content-contact">
          <h1 className="title-contact">Contact</h1>
          <div className="contact-container">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>
                <strong>Address:</strong> Jl. Tanah Sereal No. 123, Jakarta
              </p>
              <p>
                <strong>Phone:</strong> +62 857 7000 2971
              </p>
              <p>
                <strong>Email:</strong> tepan.gabriel@gmail.com
              </p>
              <a
                href={`https://wa.me/6285770002971`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
