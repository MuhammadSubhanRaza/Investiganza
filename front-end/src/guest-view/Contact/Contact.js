import './Contact.css';

import React,{useEffect} from 'react'
import Navigation from '../Common/Navigation'
import Footer from './../Common/Footer';
import Contactbody from './Contactbody';
import Header from './Header';
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
      <>
        <Header/>
        <Contactbody/>
        <Footer/>
      </>

  )
}

export default Contact
