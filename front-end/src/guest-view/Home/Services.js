import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
  return (
      <section className='home-services-sec'>
          <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='home-service-card-img'>
                        <img src='images/s1.png'/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='home-service-card-text'>
                        
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='home-service-card-text'>
                        
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='home-service-card-img'>
                    <img src='images/s2.png'/>
                    </div>
                </div>
            </div>
          </div>
      </section>
  )
}

export default Services