import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-item-sec">All rights reserved &copy; Anamika Garg</div>
        <div className="footer-icon-sec">
            <CiLinkedin className='icons'id='linkedin'/>
            <FaGithub className='icons'/>
        </div>
    </div>
    </>
  )
}

export default Footer