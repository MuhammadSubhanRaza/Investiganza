

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './custom.css';

const Clients = () => {
  return (
    <section className='home-clients-sec'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='home-clients-sec-header'>
              <h6>User Feedback</h6>
              <h1>What Our Clients Say About Us</h1>
              <p>
                Clients are the key thing for us our motive is to keep our clients happy <br />  Our clients are motivated and satisfied to work woth us
              </p>
            </div>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='home-client-card' data-aos="fade-right">
              <span className='quote-testimonial'><FontAwesomeIcon icon={faQuoteLeft} /></span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
              </p>
              <div className='client-img-holder'>
                <img src='images/c2.jpg' />
              </div>
              <h5>Moiz Madni Khan</h5>
              
            </div>
          </div>
          <div className='col-md-4'>
            <div className='home-client-card' data-aos="fade-up">
              <span className='quote-testimonial'><FontAwesomeIcon icon={faQuoteLeft} /></span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
              </p>
              <div className='client-img-holder'>
                <img src='images/c3.jpg' />
              </div>
              <h5>Muhammad Talha</h5>
              
            </div>
          </div>
          <div className='col-md-4'>
            <div className='home-client-card' data-aos="fade-left">
              <span className='quote-testimonial'><FontAwesomeIcon icon={faQuoteLeft} /></span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
              </p>
              <div className='client-img-holder'>
                <img src='images/c5.jpg' />
              </div>
              <h5>Arham Khan</h5>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
