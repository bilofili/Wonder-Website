import React, {useEffect}  from 'react'
import './Cards.css'

// Imported Images
import cardImage1 from '../Assets/cardImage1.jpg'
import cardImage2 from '../Assets/cardImage2.jpg'
import cardImage3 from '../Assets/cardImage3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css' 


//imported Icon
import {AiOutlineSwapRight} from 'react-icons/ai'

const Cards = () => {

   useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  
  return (
    
    <div className='cards'>
      <div data-aos='fade-up' data-aos-duration='2000' className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage1} />
          </div>
          <h4 className="textDiv">
            Balloon Flight
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage2} />
          </div>
          <h4 className="textDiv">
            Beach Travels
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage3} />
          </div>
          <h4 className="textDiv">
            Mountain Tours
          </h4>
        </div>
      </div>

      <div className="spanText flex" onClick={() => {
        
      }}>
        Other Tours <AiOutlineSwapRight className='icon' id='tours'/>
      </div>
    </div>
  )
}

export default Cards