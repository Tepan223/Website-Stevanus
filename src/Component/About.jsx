import '../Styles/About.css'
function About () {
    return (
        <>
        <div className='about' id='about'>
            <div className="content-about">
                <div className="left-content-about">
                    <h1 className='title-about'>About <span style={{color: '#70f0fe'}}>Me</span></h1>
                    <p className='description-about1'>Hello! My name is Stevanus Gabriel, I am a student from Tri Ratna School who is currently studying Software Engineering. I like to learn new things, especially those related to front-end development and back-end development.
                    </p>
                    <p className='description-about2'>I have experience in programming languages such as HTML, CSS, JavaScript, React, and Next.js.</p>
                    <p className='description-about3'>In my spare time, I often do small projects. I believe that by continuing to learn and try, I can grow and make a positive contribution in the future.
                    </p>
                    <p className='description-about4'>If you have any questions or suggestions, please don't hesitate to contact me.</p>
                    <p className='description-about5'>Thank you for visiting my portfolio.</p>
                </div>
                <div className="right-content-about">
                    <h1 className='title-skills'>My <span style={{color: '#70f0fe'}}>Skills</span></h1>
                    <div className='content-skills'>
                        <div className="icon-skill">
                            <img src="HTML.svg" alt="HTML" className="style-icon-skill" />
                            <p className='name-skill'>HTML</p>
                        </div>
                        <div className="icon-skill">
                            <img src="CSS.svg" alt="CSS" className="style-icon-skill" />
                            <p className='name-skill'>CSS</p>
                        </div>
                        <div className="icon-skill">
                            <img src="Javascript.svg" alt="JavaScript" className="style-icon-skill" />
                            <p className='name-skill'>JavaScript</p>
                        </div>
                        <div className="icon-skill">
                            <img src="React.svg" alt="React" className="style-icon-skill" />
                            <p className='name-skill'>React</p>
                        </div>
                        <div className="icon-skill">
                            <img src="Vercel.svg" alt="Vercel" className="style-icon-skill" />
                            <p className='name-skill'>Vercel</p>
                        </div>
                        <div className="icon-skill">
                            <img src="GithubIcon.svg" alt="GitHub" className="style-icon-skill" />
                            <p className='name-skill'>GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About