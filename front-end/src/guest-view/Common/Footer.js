
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faEnvelope, faEye, faMap, faMapMarker, faMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container-fluid">
            <div className="row p-0">
                <div className="col-md-4 p-0 m-0">
                    <div className="ftr-site-desc-sec pt-5 pb-5">
                        <img src="./images/logo.png" alt=""/>
                        <h6>Investiganza</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nisi assumenda quis sed officiis accusamus nesciunt eos? Accusantium dolor odit vitae ea consequuntur illum iure.</p>
                        <p>Lorem ipsum dolor sit amet voluptate ...</p>
                        <a href="#">Explore More</a>
                    </div>
                </div>
                <div className="col-md-8 p-0">
                    <div className="ftr-site-links-sec pb-5 pt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="ftr-secs ftr-links-sec">
                                        <h6>Quick Links</h6>
                                        <div className="ftr-heading-divider"></div>
                                        <ul>
                                            <li>
                                                <a href="#">Home</a>
                                            </li>
                                            
                                            <li>
                                                <a href="#">Projects</a>
                                            </li>
                                            
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            
                                            <li>
                                                <a href="#">Terms and Policies</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ftr-secs ftr-contact-sec">
                                        <h6>Contact</h6>
                                        <div className="ftr-heading-divider"></div>
                                        <ul>
                                            <li>
                                                <span><FontAwesomeIcon icon={faPhone}/></span>
                                                021 78945612
                                            </li>
                                            <li>
                                                <span><FontAwesomeIcon icon={faEnvelope}/></span>
                                                investiganza@gmail.com
                                            </li>
                                            <li>
                                                <span><FontAwesomeIcon icon={faMap}/></span>
                                                Karachi | Pakistan
                                            </li>
                                            <li>
                                                <span><FontAwesomeIcon icon={faMapMarker}/></span>
                                                Office . AG 7 | | Building 12 | Shahra-e-Faisal
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ftr-secs ftr-subscribe-sec">
                                        <h6>stay in touch</h6>
                                        <div className="ftr-heading-divider"></div>
                                        <div className="ftr-subscribe-inner">
                                            <form action="">
                                                <input type="text"/>
                                                <button>Send <span><i className="fa fa-paper-plane"></i></span></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ftr-site-social-cont">
                        <a href="#" className="ftr-social-icons">
                            <span>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </span>
                        </a>
                        <a href="#" className="ftr-social-icons">
                            <span>
                            <FontAwesomeIcon icon={faTwitter}/>
                            </span>
                        </a>
                        <a href="#" className="ftr-social-icons">
                            <span>
                            <FontAwesomeIcon icon={faLinkedin}/>
                            </span>
                        </a>
                        <a href="#" className="ftr-social-icons">
                            <span>
                            <FontAwesomeIcon icon={faYoutube}/>
                            </span>
                        </a>
                        <a href="#" className="ftr-social-icons">
                            <span>
                            <FontAwesomeIcon icon={faInstagram}/>
                            </span>
                        </a>
                        <div className="pt-2">
                            <p>Copyright Ⓒ 2022 All rights reserved | Powered by <a href="#">Investiganza</a></p>
                            <span className="ftr-courtesy">Designed by Muhammad Subhan Raza</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
