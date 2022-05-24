import React from 'react'
import About from './About'
import Clients from './Clients'
import Counter from './Counter'
import Footer from './../Common/Footer'
import Head from './Head'
import Services from './Services'
import Subscribe from './../Common/Subscribe'

const Home = () => {
  return (
      <>
        <Head/>
        <About/>
        <Services/>
        <Counter/>
        <Clients/>
        <Subscribe/>
        <Footer/>
      </>
  )
}

export default Home