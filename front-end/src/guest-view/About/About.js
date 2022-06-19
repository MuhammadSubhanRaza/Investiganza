import './About.css';
import Ribbon from './../Home/Ribbon';

import React from 'react'
import Navigation from './../Common/Navigation';
import Footer from './../Common/Footer';
import Header from './Header'
import AboutContent from './AboutContent';
import Subscribe from '../Common/Subscribe';

const About = () => {
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
