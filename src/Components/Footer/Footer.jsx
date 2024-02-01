import React, {useEffect} from 'react'
import './Footer.css'

//imported Icons
import {HiPhone} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import {FaLocationArrow} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='footer'>

      <div className="secContainer container">
        <div className="content grid">

          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
              CONTACT US
            </div>

            <div className="contactDiv">
              <span className="flex">
                <HiPhone className='icon'/>
                <span>+244 334 556 67</span>
              </span>
              <span className="flex">
                <MdEmail className='icon'/>
                <span>isratech8@outlook.com</span>
              </span>
              <span className="flex">
                <FaLocationArrow className='icon'/>
                <span>+244 334 556 67</span>
              </span>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
            POPULAR NEWS
            </div>

            <div className="singleNews">
              <span className="text">
              Your Personal Guide to the most places to visit in the world
              </span>
              <p>
                Jan 04, 2023
              </p>
            </div>

            <div className="singleNews">
              <span className="text">
              The grand reveal of the most iconic hotel in the world - Atlantis The Royal
              </span>
              <p>
                Jan 20, 2023
              </p>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className="row">
             <div className="spanText">
              QUICK LINKS
             </div>
             <div className="footerLinks">
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
             </div>
          </div>

        </div>
        <div  className="bottomDiv flex">
          <p >Copyright 2023 IsraTech - All rights reserved</p>

          <div className="social flex">
            <FaFacebookF className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>

          <p>Privacy Policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer