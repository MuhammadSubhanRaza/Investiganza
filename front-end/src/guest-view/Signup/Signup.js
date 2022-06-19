import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Footer from '../Common/Footer';
import Navigation from '../Common/Navigation';
import { faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons'

import './Signup.css';

const Signup = () => {
    return (
        <>
            <Navigation/>
            <section className='signup-main-sec'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4 pt-0'>
                            <div class="signup-left">
                                <div class="signup-left-content">

                                    <img src="images/logo.png" class="mb-3" alt="" />
                                    <div class="signup-left-header">
                                        <h6>Create New Account</h6>
                                        <p>- Enter your details</p>
                                        <p>- Correct Details are necesary</p>
                                    </div>
                                    <div class="p-2"></div>

                                    <form>
                                        <label>First Name</label>
                                        <input type="text" />
                                        <label>Last Name</label>
                                        <input type="text" />
                                        <label>Email</label>
                                        <input type="email" />
                                        <label>Password</label>
                                        <input type="password" />
                                        <button>Sign up <FontAwesomeIcon icon={faArrowRight}/></button>
                                    </form>
                                </div>
                            </div>  
                        </div>
                        <div className='col-md-8 p-0'>
                        <div class="signup-right">
                        <div class="signup-right-content">
                            <div class="signup-carousel-container">
                                <div id="carouselExampleIndicators" class="carousel slide signup-carousel" data-ride="carousel">
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                        <div class="signup-slider-card">
                                            <img src="./images/signupsvg1.svg" alt=""/>
                                            <h5>Heading Here</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Nesciunt totam quia ipsam! Sed, rem non.</p>
                                        </div>
                                      </div>
                                      <div class="carousel-item">
                                        <div class="signup-slider-card">
                                            <img src="./images/signupsvg6.svg" alt=""/>
                                            <h5>Heading Here</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Nesciunt totam quia ipsam! Sed, rem non.</p>
                                        </div>
                                      </div>
                                      <div class="carousel-item">
                                        <div class="signup-slider-card">
                                            <img src="./images/signupsvg4.svg" alt=""/>
                                            <h5>Heading Here</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Nesciunt totam quia ipsam! Sed, rem non.</p>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                                <div class="signup-right-social-links-cont text-center">
                                    <h6>Sign up with Google or Facebook</h6>
                                    <a href="#" class="signup-social-btns">
                                        <FontAwesomeIcon icon={faFacebook}/> Facebook
                                    </a>
                                    <span class="p-2"></span>
                                    <a href="#" class="signup-social-btns">
                                        <FontAwesomeIcon icon={faGoogle}/> Google
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer/>
        </>
    )
}

export default Signup