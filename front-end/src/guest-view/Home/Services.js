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
                    Investiganza is one of its kind, Finance Seeker and Financers are here for their advantages
                    </p>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-3'>
                    <div className='home-service-card' data-aos="fade-up">
                        <div>
                            <span><FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon></span>
                        </div>
                        <h5>Financial Stablity</h5>
                        <p>Existing Business can join investiganza to double their profits or can invest in other business to enjoy the quality of life with new business stakes</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='home-service-card' data-aos="fade-up">
                        <div>
                            <span><FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon></span>
                        </div>
                        <h5>Profitablity</h5>
                        <p>Profitablity ensures the a handsome margin of profit as per the idea stablity presented. All parties involved are assured to get their margin</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='home-service-card' data-aos="fade-up">
                        <div>
                            <span><FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon></span>
                        </div>
                        <h5>Finance Anytime</h5>
                        <p>Requirment of finance for the startup or existing setup, is entertained anytime according to the procedure of the organization of Investiganza</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='home-service-card' data-aos="fade-up">
                        <div>
                            <span><FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon></span>
                        </div>
                        <h5>Meetings</h5>
                        <p>Investor and Finance seeker may schedule a meeting after they are agreed upon the proposals and the profit sharing with collaboration of Investiganza</p>
                    </div>
                </div>
            </div>
          </div>
      </section>
  )
}

export default Services