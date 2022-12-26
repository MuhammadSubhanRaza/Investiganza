import "./Login.css";
import React, { useEffect, useState } from 'react'
import Footer from '../Common/Footer'
import Navigation from './../Common/Navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faInfoCircle, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { loginSchema } from "../../schemas/login";
import { login } from "./LoginService";
import Aos from 'aos';
import "aos/dist/aos.css";


const Login = () => {

    // ------------ INITIALIZERS ----------

    const navigate = useNavigate()
    const [isLoggingIn, setisLoggingIn] = useState(false);
    const [isInvalidCreds, setisInvalidCreds] = useState(false);


    // --------------- USE EFFECT --------------

    useEffect(() => {
       
        Aos.init({duration:2000})
    }, []);



    // -------------- FORMIK -----------------

    const initialValues = {
        email: "",
        password: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, setValues, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            handleLogin()
        }
    });

    async function handleLogin() {
        const response = await login(values);
        setisLoggingIn(true);
        setisInvalidCreds(false)
        setTimeout(() => {
            var message = response.data.message;
            if (message == "success") {
                setisLoggingIn(false)
                navigate('/newsfeed')   
            }else{
                setisLoggingIn(false)
                setisInvalidCreds(true)
            }
            console.log(values)
        }, 3000);
    }



    return (
        <>
            <Navigation />
            <section className="sec-login-main">
                <video src='videos/guest/5.mp4' autoPlay muted loop />
                <div className="sec-login-main-content">
                    <div className="login-form-container" data-aos="zoom-in">
                        {isLoggingIn &&
                            <div className="login-progress"></div>
                        }
                        {
                            isInvalidCreds && 
                            <div className="login-invalid-cred">
                                <p><FontAwesomeIcon icon={faInfoCircle} className="mr-2"/> Invalid email or password</p>
                            </div>
                        }
                        
                        <div className="p-5">
                            <h3>Login</h3>
                            <div className="login-sec-main-divider"></div>
                            <form onSubmit={handleSubmit}>
                                <label>Username or Email</label>
                                <input type="email" placeholder="Enter your email"
                                    name="email"
                                    disabled={isLoggingIn}
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {
                                    errors.email && touched.email ? (
                                        <label className='text-danger mt-1'>{errors.email}</label>
                                    ) : null
                                }


                                <label>Password</label>
                                <input type="password" placeholder="Enter your password"
                                    name="password"
                                    disabled={isLoggingIn}
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {
                                    errors.password && touched.password ? (
                                        <label className='text-danger mt-1'>{errors.password}</label>
                                    ) : null
                                }
                                <div className="mt-3">
                                    <input type="checkbox" />
                                    <span className="pl-3">Remember Me</span>
                                </div>
                                <button type="submit" disabled={isLoggingIn} className="login-loginbtn">
                                    {isLoggingIn && <div className='dt-save-spinner mr-3'></div>}
                                    {isLoggingIn && "Signing in... "}
                                    {!isLoggingIn && "Sign in"}
                                </button>
                                <div className="mt-3 text-center">
                                    <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faGoogle} /></a>
                                    <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>

                                <div className="text-center pt-4">
                                    <Link to="/signup" className="login-donothave-account">I do not have any account</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
