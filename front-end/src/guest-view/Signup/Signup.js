import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Footer from '../Common/Footer';
import Navigation from '../Common/Navigation';
import { faFacebook,faGoogle,faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <Navigation/>
            <section className='signup-main-sec'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-5 pt-0'>
                            <div class="signup-left">
                                <div class="signup-left-content">

                                    <img src="images/logo.png" class="mb-3" alt="" />
                                    <div class="signup-left-header">
                                        <h6>Create New Account</h6>
                                        <div className='createaccount-divider'></div>
                                    </div>
                                    <div class="p-2"></div>

                                    <form>
                                        <label>First Name</label>
                                        <input type="text" placeholder='Enter Your First Name'/>
                                        <label>Last Name</label>
                                        <input type="text" placeholder='Enter Your Last Name'/>
                                        <label>Email</label>
                                        <input type="email" placeholder='Enter Your Email Name'/>
                                        <label>Password</label>
                                        <input type="password" placeholder='Enter Your Password'/>
                                        <Link to="/create-profile" className='btnSignupAccount'>Sign up <FontAwesomeIcon icon={faArrowRight}/></Link>
                                    </form>
                                </div>
                            </div>  
                        </div>
                        <div className='col-md-7 p-0'>
                        <div class="signup-right">
                        <div class="signup-right-content">
                            <div className='p-5'>
                            <h2>Join Investiganza</h2>
                            <p className='pt-4'>we need to bring some change by providing such a platform or market place that facilitate the meeting of investors and business makers for the purpose of business deals and agreements</p>
                            <div className="mt-5">
                                <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faGoogle}/></a>
                                <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faFacebook}/></a>
                                <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faLinkedin}/></a>
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