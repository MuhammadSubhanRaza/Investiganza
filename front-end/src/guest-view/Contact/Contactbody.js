

import { faEnvelope, faMap, faMapMarker, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contactbody = () => {
  return (
      <section className='contact-sec-form'>
          <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='contact-body-left'>
                        <h3>Contact Us</h3>
                        <form>
                            <input type="text" placeholder='Enter Your Name'/>
                            <input type="email" placeholder='Enter Your Email'/>
                            <input type="text" placeholder='Enter Subject'/>
                            <textarea rows="3" placeholder='Your Message'>
                            </textarea>
                            <button><FontAwesomeIcon icon={faPaperPlane}/> Send Message</button>
                        </form>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='contact-body-right' data-aos="fade-left">
                        <div className='text-center'>
                        <img src='images/contactsvg3.svg'/>
                        </div>
                        <div className='d-flex mt-5'>
                            <span><FontAwesomeIcon icon={faMapMarker}/></span>
                            <p className='ml-3'><strong>Address : </strong> Office . AG 7 | | Building 12 | Shahra-e-Faisal</p>
                        </div>
                        <div className='d-flex'>
                            <span><FontAwesomeIcon icon={faMap}/></span>
                            <p className='ml-3'><strong>Location : </strong> Karachi | Pakistan</p>
                        </div>
                        <div className='d-flex'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <p className='ml-3'><strong>Phone : </strong> 021 78945612</p>
                        </div>
                        <div className='d-flex'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <p className='ml-3'><strong>Email : </strong> investiganza@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
  )
}

export default Contactbody
