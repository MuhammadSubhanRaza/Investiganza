import { faChartPie, faHandshake, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Ribbon = () => {
  return (
    <section className='home-sec-ribbon'>
      <div>
        <h3 className='text-white'>Investiganza's Community</h3>
        <p className='home-sec-ribbon-header-desc text-white'>
          We have a great community of Investors and Finance Seeker who make Investiganza absolute best <br /> Do You want to explore? 
        </p>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3 offset-sm-3'>
              <div className='d-flex home-ribbon-btn'>
                <span>
                  <FontAwesomeIcon icon={faHandshake} />
                </span>
                <div>
                  <a href='#' className='pl-3'>Investors</a>
                  <p className='pl-3 text-white'>on Investiganza</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='d-flex home-ribbon-btn'>
                <span>
                  <FontAwesomeIcon icon={faChartPie} />
                </span>
                <div>
                  <a href='#' className='pl-3'>Investment</a>
                  <p className='text-white'>on Investiganza</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Ribbon