import ocean from '../Assets/ocean.mp4';
import './Contact.css'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';

import Aos from 'aos'
import 'aos/dist/aos.css'


function Contact() {

    const [state, handleSubmit] = useForm("mayreynb");

  
    

    if (state.succeeded) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You request has been set successfully",
            showConfirmButton: false,
            timer: 1500
          });
     }

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


    return <div className='form-space' id='contact'>
    
        <div className='contact-form-container' data-aos='fade-up' data-aos-duration='2000'>

            <div className="form-bl-one">
                <video src={ocean} autoPlay loop muted typeof='mp4'></video>
            </div>

            <div className="form-bl-two">
                <form onSubmit={handleSubmit} >

                    <h4>Ready to embark on your next adventure? Let's start planning today! Fill out the form below to get in touch.</h4>

                    <div className='fr-bl-one'>
                        <input id="full-name" name="firs-name" placeholder='First Name...' />
                        <ValidationError prefix="Message" field="firs-name" errors={state.errors} />
                    </div>

                    <div className='fr-bl-two'>
                        <input id="full-name" name="last-name" placeholder='Last Name...' />
                        <ValidationError prefix="Message" field="last-name" errors={state.errors} />
                    </div>

                    <div className='fr-bl-three'>
                        <input id="email" type="email" name="email" placeholder='Email...'/>
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className='fr-bl-four'>
                        <button type="submit" disabled={state.submitting}> Submit </button>
                    </div>

                </form>
            </div>
        </div>
    </div>    
}

export default Contact;

