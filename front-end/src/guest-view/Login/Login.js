import "./Login.css";
import React from 'react'
import Footer from '../Common/Footer'
import Navigation from './../Common/Navigation'


const Login = () => {
  return (
      <>
        {/* <Navigation/> */}
            <section className='login-sec'>
                <div className="login-main">
                    <div className="login-left">

                    </div>
                    <div className="login-right">
                        <div className="login-right-content">
                            <h6>Welcome To</h6>
                            <h1>Investiganza</h1>
                            <div className="login-heading-spacer"></div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, inventore!</p>
                        </div>
                    </div>
                </div>
            </section>
        {/* <Footer/> */}
      </>
  )
}

export default Login
