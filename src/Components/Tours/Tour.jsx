import React, {useEffect} from 'react'
import './Tour.css'

// Imported Images
import tourImage1 from '../Assets/image2.png'
import tourImage2 from '../Assets/image3.png'

import Aos from 'aos'
import 'aos/dist/aos.css'


// Imported Icons
import {AiFillStar} from 'react-icons/ai'
 
const Tour = () => {

   useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='tours container section'>
      <div className="secContainer">
        <span className="secTitle">
          Hot Tours
        </span>
        
        <div className="tourContainer">

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage1}/>
            </div>
            <div data-aos='fade-up' data-aos-duration='3000' className="tourInfo">
              <span className="tourTitle">
                Spain, Benidorm
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>

                <small className='custReview'>
                  2 Customer Review
                </small>
              </div>

              <p>
              Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters
              </p>
              <a href='#staff' >
               <button className="btn">Buy This Tour</button>
               </a>
            </div>
             
             <span className="price">
              $790
             </span>

          </div>
          
          <div data-aos='fade-up' data-aos-duration='3000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage2}/>
            </div>
            <div data-aos='fade-up' data-aos-duration='3500' className="tourInfo">
              <span className="tourTitle">
              Mauritius Island, India
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>

                <small className='custReview'>
                  12 Customer Review
                </small>
              </div>

              <p>
              Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests.
              </p>
              <a href='#staff' >
               <button className="btn">Buy This Tour</button>
               </a>
            </div>
             
             <span className="price">
              $590
             </span>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Tour