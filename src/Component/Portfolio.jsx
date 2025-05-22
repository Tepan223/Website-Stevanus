import '../Styles/Portfolio.css'
function Portfolio() {

  return (
    <>
    <div className='portfolio' id='portfolio'>
      <div className='content-portfolio'>
        <h1 className='title-portfolio'>My Portfolio</h1>
        <div className='card-portfolio'>
          <div className='card-portfolio-img'>
            <a href="" className='link-card-portfolio'>
              <img src="Portfolio1.png" alt="" className='img-portfolio'/>
            </a>
          </div>
          <div className='card-portfolio-img'>
            <a href="" className='link-card-portfolio'>
              <img src="Portfolio2.png" alt="" className='img-portfolio'/>
            </a>
          </div>
          <div className='card-portfolio-img'>
            <a href="" className='link-card-portfolio'>
              <img src="Portfolio3.png" alt="" className='img-portfolio'/>
            </a>
          </div>
          <div className='card-portfolio-img'>
            <a href="" className='link-card-portfolio'>
              <img src="Portfolio4.png" alt="" className='img-portfolio'/>
            </a>
          </div>
          <div className='card-portfolio-img'>
            <a href="" className='link-card-portfolio'>
              <img src="Portfolio5.png" alt="" className='img-portfolio'/>
            </a>
          </div>
          <div className='card-portfolio-img'>
            <a href="" className='link-card-portfolio'>
              <img src="Portfolio6.png" alt="" className='img-portfolio'/>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Portfolio
