import React, { useState } from 'react'
import html from '/html-5.svg'
import Skillcard from './Skillcard';
import {skillData} from '../data.js'
const Skills = () => {
  const [data , setData] = useState(skillData);
  return (
    <>
    <div className="container skills">
      <div className="skill-heading-div">
        <h1 className="topHeading">Skills</h1>
        <br />
        <h2 className='skill-detail'>I have foundational skills in web development and am excited to build on them.</h2>
        </div>
        <div className="skills-section">
          {
            data.map((e)=>{
              return <Skillcard img={e.img} key={e.skill}/>
            })
          }
          
        </div>
    </div>
    </>
  )
}

export default Skills