import './Contact.css';

import React from 'react'
import Navigation from '../Common/Navigation'
import Footer from './../Common/Footer';
import Contactbody from './Contactbody';
import Header from './Header';

const Contact = () => {
  return (
      <>
      {/* <Navigation/> */}
        <Header/>
        <Contactbody/>
        <Footer/>
      </>

  )
}

export default Contact
