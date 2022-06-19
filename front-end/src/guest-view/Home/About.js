import { faAnchor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <>
    <section className='home-sec-about'>
      <div className='container'>
        <div className='row' >
          <div className='col-md-12'>
            <div className='home-about-sec-body' data-aos="fade-right">
              <div className='row'>
                <div className='col-md-6'>
                  <img src='images/businessgraph.svg' />
                </div>

                <div className='col-md-6'>
                  <h1>We belive in making dreams true</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
                  </p>
                  <a href="#">More Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    <section className='home-sec-about-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
           

            <div className='home-about-sec-body-2' data-aos="fade-left">
              <div className='row'>
                <div className='col-md-6'>
                  <h1>We belive in collective Effort</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
                  </p>
                  <a href="#">More Details</a>
                </div>
                <div className='col-md-6'>
                  <img src='images/businessgraph2.svg' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default About