import { faChartBar, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
  return (
      <section className='home-services-sec'>
          <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <div className='home-about-sec-header'>
                    <h6 className='mt-4'>unique features</h6>
                    <h1>Why Investiganza ?</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit Ullam reiciendis voluptas aperiam voluptatum nobis <br />  iure nulla optio? Inventore, cum? Mollitia maiores enim
                    </p>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-3'>
                    <div className='home-service-card'>
                        <div>
                            <span><FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon></span>
                        </div>
                        <h5>Feature 1</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='home-service-card'>
                        <div>
                            <span><FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon></span>
                        </div>
                        <h5>Feature 1</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='home-service-card'>
                        <div>
                            <span><FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon></span>
                        </div>
                        <h5>Feature 1</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='home-service-card'>
                        <div>
                            <span><FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon></span>
                        </div>
                        <h5>Feature 1</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis</p>
                    </div>
                </div>
            </div>
          </div>
      </section>
  )
}

export default Services