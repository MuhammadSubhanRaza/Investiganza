import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import './ServiceDown.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const ServiceDown = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
},[]);



  return (
    <section className='sec-service-down'>
      <img src='images/error_server_down.svg' data-aos="fade-down"/>
      <div data-aos="fade-down" >
      <h1>Oops!</h1>
      <h6 className='mt-4'><span>503</span>Service Down</h6>
      <p >
        Sorry ! for inconvience sytem is down
      </p>
      <p>Service will be available soon</p>
      <Link to='/'>Go back to home</Link>
      </div>
    </section>
  )
}

export default ServiceDown