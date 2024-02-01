import React, {useState} from 'react'
import './Navbar.css'

//Imported Icons
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {

  //Lets display the Navbar
  const [active, setActive]  = useState('menuDiv')
  
  const showNavBar = () =>{
    setActive('menuDiv activeNavbar')
  }

  //Lets remove the Navbar
  const removeNavBar = () =>{
    setActive('menuDiv')
  }

  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">Wonder</h3>
        </div>

        <div className={active}>
          <ul className="menuLists">
            <li className="navItem">
              <a href="#home" onClick={removeNavBar} className="menuLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#staff" onClick={removeNavBar} className="menuLink">About</a>
            </li>
            <li className="navItem">
              <a href="#tours" onClick={removeNavBar} className="menuLink">Our Tours</a>
            </li>
            <li className="navItem">
              <a href="#Gallery" onClick={removeNavBar} className="menuLink">Gallery</a>
            </li> 
            <li className="navItem">
              <a href="#contact" onClick={removeNavBar} className="menuLink">Contact Us</a>
            </li>
          </ul>

          <div onClick={removeNavBar} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div className="socialIcons flex">
          <BsFacebook className='icon'/>
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <AiFillInstagram className='icon'/>
        </div>

        <div onClick={showNavBar} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar