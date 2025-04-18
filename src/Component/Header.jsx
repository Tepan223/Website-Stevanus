import '../Styles/Header.css'
function Header () {
    return (
        <>
        <div className='header'>
            <div className='container-header'>
                <div className='title pc' >Stevanus Gabriel</div>
                <div className='navigation pc'>
                    <a href="#home">Home</a>
                    <a href="#about">About & Skill</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header