import { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import '../Styles/Home.css';

gsap.registerPlugin(TextPlugin);

function Home () {
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const tl = gsap.timeline();

        if (isMobile) {
            tl.fromTo('.title1-home',
                { opacity: 0, y: -40 },
                { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
            )
            .fromTo('.title2-home',
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' }
            )
            .fromTo('.title3-home',
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' }
            )
            .fromTo('.description-home',
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }
            )
            .fromTo('.content-contact-home > div',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.15, stagger: 0.07, ease: 'power2.out' }
            )
            .fromTo('.btn-home',
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)' }
            )
            .fromTo('.img-home',
                { opacity: 0, y: 30, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' }
            );
        } else {
            tl.fromTo('.title1-home',
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.35 }
            )
            .fromTo('.title2-home',
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.35 }
            )
            .fromTo('.title3-home',
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.35 }
            )
            .fromTo('.description-home',
                { opacity: 0 },
                { opacity: 1, duration: 0.25 }
            )
            .fromTo('.content-contact-home > div',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.2, stagger: 0.07 } 
            )
            .fromTo('.btn-home',
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.35 }
            )
            .fromTo('.img-home',
                { opacity: 0, scale: 0.7 },
                { opacity: 1, scale: 1, duration: 0.4 }
            );
        }

        const typeTexts = ["Web Developer", "Mobile Developer", "UI Designer"];
        const masterTl = gsap.timeline({ repeat: -1 });

        typeTexts.forEach(text => {
            const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
            tl.to('.type-write1', {
                duration: 1,
                text: text,
                ease: 'none'
            });
            tl.to('.type-write2', {
                duration: 1,
                text: text,
                ease: 'none'
            }, 0);
            masterTl.add(tl);
        });

    }, []);

    return (
        <>
        <div className='home' id='home'>
            <div className='content-home'>
                <div className='content-left-home'>
                    <div className='content-title-home'>
                        <h1 className='title1-home'>Hello, It`s Me</h1>
                        <h1 className='title2-home'>Stevanus Gabriel</h1>
                        <h1 className='title3-home'>
                            And I am a <span className='type-write1 type-cursor' style={{ color: '#70f0fe' }}></span>
                        </h1>
                    </div>
                    <div className='content-description-home'>
                        <p className='description-home'>
                            I am a <span className='type-write2 type-cursor' style={{ color: '#70f0fe' }}></span>
                        </p>
                    </div>
                    <div className='content-contact-home'>
                        <div className='content-icon-home-whatsapp'>
                            <a href="" className='logo-img-home'>
                                <img src="Whatsapp.svg" alt="Whatsapp" className='img-contact-home'/>
                            </a>
                        </div>
                        <div className='content-icon-home-instagram'>
                            <a href="" className='logo-img-home'>
                                <img src="Instagram.svg" alt="Instagram" className='img-contact-home'/>
                            </a>
                        </div>
                        <div className='content-icon-home-tiktok'>
                            <a href="" className='logo-img-home'>
                                <img src="TikTok.svg" alt="TikTok" className='img-contact-home'/>
                            </a>
                        </div>
                        <div className='content-icon-home-email'>
                            <a href="" className='logo-img-home'>
                                <img src="Email.svg" alt="Email" className='img-contact-home'/>
                            </a>
                        </div>
                        <div className='content-icon-home-github'>
                            <a href="" className='logo-img-home'>
                                <img src="Github.svg" alt="GitHub" className='img-contact-home'/>
                            </a>
                        </div>
                    </div>
                    <div className='content-btn-home'>
                        <a href="#about" className='btn-home'>More About Me</a>
                    </div>
                </div>
                <div className='content-right-home'>
                    <img src="Corozan.png" alt="" className='img-home'/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
