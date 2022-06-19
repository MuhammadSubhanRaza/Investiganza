import './About.css';
import Ribbon from './../Home/Ribbon';

import React,{useEffect} from 'react'
import Navigation from './../Common/Navigation';
import Footer from './../Common/Footer';
import Header from './Header'
import AboutContent from './AboutContent';
import Subscribe from '../Common/Subscribe';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
      <>
        <Navigation/>
        <Header/>
        <AboutContent/>
        {/* <Subscribe/> */}
        <Ribbon/>
        <Footer/>
      </>
  )
}

export default About
