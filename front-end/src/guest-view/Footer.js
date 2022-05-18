
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4 pt-4'>
            <div className='footer-about-sec'>
              <div className='ftr-abt-inner'>
                <img src='images/logos/mainLogoShaded.png' className='footer-logo' />
                <h6 >INVESTIGANZA</h6>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis aperiam, quaerat consectetur provident ipsum nostrum voluptatibus magnam, temporibus, corrupti sint! Numquam necessitatibus voluptatum excepturi.</p>
            </div>
          </div>
          <div className='col-md-2 pt-4'>
            <div className='footer-qlinks-sec'>
              <h6>Quick Links</h6>
              <a href='#'>About</a>
              <a href='#'>Link</a>
              <a href='#'>Projects</a>
              <a href='#'>Contact</a>
            </div>
          </div>
          <div className='col-md-4 pt-4'>
            <div className='footer-news-sec'>
              <h6>Latest News</h6>
              <div className='ftr-img-wrapper'>
                <img src='images/1.jpg'/>
                <div className='ftr-news-desc'>
                  <div>
                    <p>Latest News</p>
                    <span className='ftr-news-spacer'></span>
                    <a href="#">
                      <FontAwesomeIcon icon={faEye}/>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className='col-md-2 pt-4'>
            <h6>Find us on</h6>
            <div className='ftr-social-icon-inner'>
              <a href="#" className='footer-social-icon'>
                <span className='ftr-icon-span'>
                  <FontAwesomeIcon icon={faFacebook} className="text-white" />
                </span>
              </a>
              <a href="#" className='footer-social-icon'>
                <span className='ftr-icon-span'>
                  <FontAwesomeIcon icon={faYoutube} className="text-white" />
                </span>
              </a>
              <br/>
              <a href="#" className='footer-social-icon'>
                <span className='ftr-icon-span'>
                  <FontAwesomeIcon icon={faInstagram} className="text-white" />
                </span>
              </a>
              <a href="#" className='footer-social-icon'>
                <span className='ftr-icon-span'>
                  <FontAwesomeIcon icon={faTwitter} className="text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='lower-footer'>
        <div className='footer-spacer'></div>
        <div >
          <span>Copyright © 2022 All rights reserved | Investiganza</span>
          <p>Developed by Muhammad Subhan Raza</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
