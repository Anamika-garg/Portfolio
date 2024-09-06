import React from 'react'

const About = () => {
  return (
    <>
      <div className="container about" id='About'>
        <h1 className="topHeading">About me!</h1>
        <section className="aboutSec">
          {/* <div className="about-img-sec">
            <div className="about-img-div"></div>
          </div> */}
          <div className="about-text-sec">
            <div className="about-text">
              <div className="about-main-text about-details">Hi , I am Anamika Garg!</div>

              <div className="about-more-text">

                <p className='about-details'>A first-year undergraduate student with a deep enthusiasm for technology and its potential to drive innovation. As I embark on my academic journey, I’m exploring various aspects of the tech world, from software development to emerging technologies.</p>
                
                <p className='about-details'>My current focus is on developing a solid foundation in key technical skills and understanding how technology can be harnessed to solve real-world problems. I’m particularly interested in programming, system design, and the impact of digital solutions on everyday life.</p>                

                <p className='about-details'> I’m always eager to engage with new challenges, collaborate on projects, and connect with professionals who share my interest in technology. Let’s connect and explore the exciting possibilities within the tech industry!
                </p>
                
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About