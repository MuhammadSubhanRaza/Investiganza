import "./Login.css";
import React from 'react'
import Footer from '../Common/Footer'
import Navigation from './../Common/Navigation'


const Login = () => {
  return (
      <>
        <Navigation/>
           
        <section className="sec-login-main">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="login-left">
                        <div className="login-left-content">
                            <img src="images/Logos/cubeColored.png" alt=""/>
                            <form>
                                <label>Username or email</label>
                                <input type="text" />
                                <label>Password</label>
                                <input type="password" />
                                <input type="checkbox"/>
                                <span> Remember Me</span>
                                <br/>
                                <button type="submit">Login</button>
                                <span className="p-2"></span>
                                <button type="submit">Create Account</button>
                            </form>
                            <div className="mt-3"></div>
                            <a href="#" className="mr-2">Forgot Your Sign in Details</a>
                            <span>|</span>
                            <a href="#" className="ml-2">Get Help for Login</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div className="login-right">
                        <div className="login-right-content">
                            <div>
                                <div className="text-center">
                                    <img src="images/svg3.svg" alt=""/>
                                </div>
                                <h1>Welcome To Investiganza</h1>
                                <div className="login-right-seperator"></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut autem quasi magni veniam, libero consectetur.</p>
                                <a href="#">Know About Us</a>
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

export default Login
