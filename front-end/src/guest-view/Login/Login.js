import "./Login.css";
import React from 'react'
import Footer from '../Common/Footer'
import Navigation from './../Common/Navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons'


const Login = () => {
    return (
        <>
            <Navigation />

            <div className="login-header-main"></div>

            <section className="sec-login-main">
                <div className="login-main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="login-left-main">
                                    <h4>Login to your Account</h4>
                                <form>
                                    <label>Email</label>
                                    <input type="email" placeholder="Enter Your Email"/>
                                    <label>Password</label>
                                    <input type="password" placeholder="Enter Your Password"/>
                                    <div className="mt-3">
                                    <input type="checkbox"/>
                                    <span>Remember Me</span>
                                    </div>
                                    <button className="btn-login-main"><FontAwesomeIcon icon={faSignIn}/> Login</button>
                                </form>
                                <h6>OR Sign In With</h6>
                                <div className="d-flex">
                                    <button className="btn-login-main-google"><FontAwesomeIcon className="pr-2" icon={faGoogle}/> Google</button>
                                    <div className="p-3"></div>
                                    <button className="btn-login-main-facebook"><FontAwesomeIcon className="pr-2" icon={faFacebook}/> Facebook</button>
                                </div>
                                <a href="#">I don't have any account</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="login-right-main text-center">
                                    <img src="images/svg3.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Login
