import React, {useEffect} from 'react'
import './Discount.css'

//IMported Video
import video from '../Assets/video.mp4'

 import Aos from 'aos'
import 'aos/dist/aos.css'


const Discount = () => {

   useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='discount section'>
      <div className="secContainer">
          <video src={video} autoPlay loop muted typeof='mp4'></video>
          <div className="textDiv">
            <span data-aos='fade-up' data-aos-duration='2000' className="title">
            Sign Up for 35% Discount
            </span>
            <p data-aos='fade-up' data-aos-duration='2500'>
            Want to get an instat discount for your next tour to any of your favourite destinations.
            </p>

            <div data-aos='fade-up' data-aos-duration='3000' className="input_btn flex">
              <input type="text" placeholder='Enter Your Email' />
              <button className='btn'>Subscribe</button>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Discount