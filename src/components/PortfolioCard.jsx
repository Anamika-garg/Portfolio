import React from 'react'

const PortfolioCard = ({img , project , link}) => {
  return (
    <>
    <div key={link} className="portfolio-card-div">
            <div key={link} className="portfolio-card">
              <a href={link}>
              <img className='portfolio-img' src={img} alt="" />
              </a>
            </div>
          </div>
    </>
  )
}

export default PortfolioCard