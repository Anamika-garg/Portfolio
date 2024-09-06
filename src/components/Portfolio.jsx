import React , {useState} from 'react'
import PortfolioCard from './PortfolioCard'
import { portfolioData } from '../data'
const Portfolio = () => {
  const [data , setData] = useState(portfolioData);
  return (
    <>
    <div className="container portfolio" id='Portfolio'>
        <h1 className="topHeading">Portfolio</h1>
        <div className="portfolio-sub-heading">My Creative Work</div>
        <div className="portfolio-child-div">
          {
            portfolioData.map((e)=>{
              return <PortfolioCard key={e.link} img={e.img} link={e.link} project={e.project}/>
            })
          }
          <div className="portfolio-btn-div">
          <button className="btn">Load More!</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio