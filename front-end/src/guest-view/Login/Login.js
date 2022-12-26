import "./Login.css";
import React, { useState } from 'react'
import Footer from '../Common/Footer'
import Navigation from './../Common/Navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";


const Login = () => {

    // ------------ INITIALIZERS ----------

    const [isLoggingIn, setisLoggingIn] = useState(false);

    
     // -------------- FORMIK -----------------

     const initialValues = {
        email: "",
        password: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, setValues, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: signupSchema,
        onSubmit: (values) => {
            handleLogin()
        }
    });

    async function handleLogin()
    {

    }



    return (
        <>
        <Navigation/>
            <section class="sec-login-main">
                <video src='videos/guest/5.mp4' autoPlay muted loop />
                <div className="sec-login-main-content">
                    <div className="login-form-container">
                        <h3>Login</h3>
                        <div className="login-sec-main-divider"></div>
                        <form>
                            <label>Username or Email</label>
                            <input type="email" placeholder="Enter your email"
                             name="email"
                             disabled={isLoggingIn}
                             autoComplete="off"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.email}
                            />
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password"/>
                            <div className="mt-3">
                                <input type="checkbox"/>
                                <span className="pl-3">Remember Me</span>
                            </div>
                            <Link to="/newsfeed" className="login-loginbtn">LOGIN</Link>
                            <div className="mt-3 text-center">
                                <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faGoogle}/></a>
                                <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faFacebook}/></a>
                                <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faLinkedin}/></a>
                            </div>

                            <div className="text-center pt-4">
                            <a href="#" className="login-donothave-account">I do not have any account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
