import React, {useEffect} from 'react'
import './Staff.css'

// Imported Images
import user4 from '../Assets/user (4).png'
import user5 from '../Assets/user (5).png'
import user6 from '../Assets/user (6).png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Staff = () => {
 
   useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='staff container section' id='staff'>
      <div className="secContainer">
        <span className="secTitle">
          Different People - One Mission
        </span>

        <div className="staffContainer grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user4} />
            </div>
            
            <span className="name">
              Nicle Charmaine
            </span>
            <span className="jobTitle">
              CEO Wander
            </span>
            <span className="contact">
             +344 990 7758 90
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000'  className="singleStaff">
            <div className="imgDiv">
              <img src={user5} />
            </div>
            
            <span className="name">
              Mel Gupta
            </span>
            <span className="jobTitle">
              Software Eng
            </span>
            <span className="contact" id='contact'>
             +344 367 7758 90
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000'  className="singleStaff">
            <div className="imgDiv">
              <img src={user6} />
            </div>
            
            <span className="name">
              Cirilo Lobo
            </span>
            <span className="jobTitle">
              IT Specialist
            </span>
            <span className="contact">
             +344 990 7758 88
            </span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Staff