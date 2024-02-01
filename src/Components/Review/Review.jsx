import React, {useEffect} from 'react'
import './Review.css'

// Improted Images
import user1 from '../Assets/user (1).jpg'
import user2 from '../Assets/user (2).png'
import user3 from '../Assets/user (3).png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {
  
 useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='review section'>
      <div className="secContainer">
        <span className="secTitle">
          What People Say
        </span>

        <div className="reviewContainer container grid">

          <div data-aos='fade-up' data-aos-duration='3000' className="singleReview">
            <div className="imgDiv">
              <img src={user1}/>
            </div>

            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel asperiores quod nostrum exercitationem laborum a!
            </p>

            <div className="name">
              Nicole Webb
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='3500' className="singleReview">
            <div className="imgDiv">
              <img src={user2}/>
            </div>

            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel asperiores quod nostrum exercitationem laborum a!
            </p>

            <div className="name">
            Lidney Josline
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='4000' className="singleReview">
            <div className="imgDiv">
              <img src={user3}/>
            </div>

            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel asperiores quod nostrum exercitationem laborum a!
            </p>

            <div className="name">
            Rupert Loreot
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Review