import React, { useState, useRef } from 'react';
import { CgMenuGridO } from "react-icons/cg";


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const SmallScreenNav = useRef();


  
  function menuClick(){
    setVisible(!visible);
    if (visible) {
      SmallScreenNav.current.style.display = 'none';
    }
    else {
      SmallScreenNav.current.style.display = 'flex';
    }
  }
  // if()
  return (
    <>
      <nav className="navbar">
        <ul className="logoSec navSec">
          <li className="logo">Logo</li>
        </ul>
        <ul className="itemSec navSec">
          <li className="nav-item"><a href='#Home'>Home</a></li>
          <li className="nav-item"><a href='#Portfolio'>Portfolio</a></li>
          <li className="nav-item"><a href='#About'>About</a></li>
          <li className="nav-item"><a href='#Contact'>Contact</a></li>
          <li onClick={menuClick}><CgMenuGridO className='icons menubar' /></li>
        </ul>
      </nav>

      <div className="smallScreenNav">
        <ul className='smallScreenList' ref={SmallScreenNav}>
          <li onClick={menuClick}><a href="#Home">Home</a></li>
          <li onClick={menuClick}><a href="#Portfolio">Portfolio</a></li>
          <li onClick={menuClick}><a href="#About">About</a></li>
          <li onClick={menuClick}><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar