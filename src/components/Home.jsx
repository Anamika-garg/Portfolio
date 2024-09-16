import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
const Home = () => {
  const [text] = useTypewriter({
    words: ['Anamika Garg!', 'Web Developer!', 'Full Stack Developer!'],
    loop: {},
  });
  return (
    <>
      <div className="container" id='Home'>

        <div className="text-sec">
          <div className="text">
            Hi,
            <h1 className='mainHeading'> I am
              <span className='text-color'> {text} </span><Cursor className='text-color'/>
            </h1>
            <div className="heading">
              Computer Science Undergraduate<br></br>

            </div>
            <a href="#Portfolio">
              <button className="btn">My Portfolio</button>
            </a>
          </div>
        </div>
        {/* <div className="home-img-sec">
          <div className="img-div"></div>
            <div className="img-div-border"></div>
        </div> */}

      </div>
    </>
  )
}

export default Home