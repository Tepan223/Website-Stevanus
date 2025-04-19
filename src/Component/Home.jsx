import '../Styles/Home.css'
function Home () {
    return (
        <>
        <div className='home' id='home'>
            <div className='content-home'>
                <div className='content-left-home'>
                    <div className='content-title-home'>
                        <h1 className='title1-home'>Hello, It`s Me</h1>
                        <h1 className='title2-home'>Stevanus Gabriel</h1>
                        <h1 className='title3-home'>And I am a Web Developer</h1>
                    </div>
                    <div className='content-description-home'>
                        <p className='description-home'>I am a Web Developer</p>
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
                <div className='content-right-home'></div>
            </div>
        </div>
        </>
    )
}

export default Home