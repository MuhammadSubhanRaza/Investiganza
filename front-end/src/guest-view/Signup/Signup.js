import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Footer from '../Common/Footer';
import Navigation from '../Common/Navigation';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signupSchema } from '../../schemas/signup';
import { signup } from './SignupService';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useDispatch } from 'react-redux'
import { setProfileData } from '../../ReduxHub/index'


const Signup = () => {

    
    // ------------- REDUX

    const dispatch = useDispatch();

    // ------------ INITIALIZERS ----------

    const [isSigningUp, setisSigningUp] = useState(false);
    const [isThereError, setisThereError] = useState(false);
    const [signupErrors, setsignupErrors] = useState([]);
    const navigate = useNavigate();

    // -------------- FORMIK -----------------

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isInvestor: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, setValues, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: signupSchema,
        onSubmit: (values) => {
            handleSignUp()
        }
    });


    // ------------------- USE EFFECT--------------

    useEffect(() => {
       
        Aos.init({duration:2000})
    }, []);


    //   -------------- ALL METHODS -----------------

    async function handleSignUp() {
        if (values.isInvestor == "finance seeker") {
            values.isInvestor = false
        }
        else {
            values.isInvestor = true
        }
        setisSigningUp(true)
        const response = await signup(values);

        setTimeout(() => {
            var message = response.data.message;
            if (message == "success") {
                setisSigningUp(false)
                setGlobalState(response.data.user)
                navigate('/create-profile')   
            }
            else {
                
                var errorsList = response.data.errors
                setsignupErrors(errorsList)
                setisThereError(true);
                setisSigningUp(false)
            }
        }, 3000);
        
    }

    function setGlobalState(login_states)
    {
        const loggedin_user_data = {
            id : login_states.id,
            firstName : login_states.firstName,
            lastName : login_states.lastName
        }
        
        dispatch(setProfileData(loggedin_user_data))
    
    }








    return (
        <>
            <Navigation />
            <section className='signup-main-sec'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-5 pt-0'>
                            <div className="signup-left" data-aos="slide-right">
                                <div className="signup-left-content">

                                    <img src="images/logo.png" className="mb-3" alt="" />
                                    <div className="signup-left-header">
                                        <h6>Create New Account</h6>
                                        <div className='createaccount-divider'></div>
                                    </div>
                                    <div className="p-2"></div>

                                    <form onSubmit={handleSubmit}>

                                        {
                                            isSigningUp &&
                                            <div className='pt-5 pb-3'>
                                                <div className='progress-signup'></div>
                                                <p>creating account...</p>

                                            </div>
                                        }


                                        <label className='signup-frm-ctrl-ttl'>First Name</label>
                                        <input type="text"
                                            placeholder='Enter Your First Name'
                                            name="firstName"
                                            disabled={isSigningUp}
                                            autoComplete="off"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                        />
                                        {
                                            errors.firstName && touched.firstName ? (
                                                <label className='admin-form-error'>{errors.firstName}</label>
                                            ) : null
                                        }

                                        <label className='signup-frm-ctrl-ttl'>Last Name</label>
                                        <input type="text"
                                            placeholder='Enter Your Last Name'
                                            name="lastName"
                                            disabled={isSigningUp}
                                            autoComplete="off"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                        />
                                        {
                                            errors.lastName && touched.lastName ? (
                                                <label className='admin-form-error'>{errors.lastName}</label>
                                            ) : null
                                        }

                                        <label className='signup-frm-ctrl-ttl'>Email</label>
                                        <input type="email"
                                            placeholder='Enter Your Email'
                                            name="email"
                                            disabled={isSigningUp}
                                            autoComplete="off"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {
                                            errors.email && touched.email ? (
                                                <label className='admin-form-error'>{errors.email}</label>
                                            ) : null
                                        }

                                        <label className='signup-frm-ctrl-ttl'>Password</label>
                                        <input type="password"
                                            placeholder='Enter Your Password'
                                            name="password"
                                            disabled={isSigningUp}
                                            autoComplete="off"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{ color: "black" }}
                                            value={values.password}
                                        />
                                        {
                                            errors.password && touched.password ? (
                                                <label className='admin-form-error'>{errors.password}</label>
                                            ) : null
                                        }


                                        <label className='signup-frm-ctrl-ttl'>I want to join as</label>
                                        <div className='signup_radio_cont'>
                                            <input type="radio"
                                                name='isInvestor'
                                                disabled={isSigningUp}
                                                autoComplete="off"
                                                onBlur={handleBlur}
                                                value={values.isInvestor === "finance seeker"}
                                                onChange={() => setFieldValue("isInvestor", "finance seeker")}
                                            />
                                            <span>Finance Seeker</span>

                                            <input type="radio"
                                                name='isInvestor'
                                                disabled={isSigningUp}
                                                autoComplete="off"
                                                onBlur={handleBlur}
                                                value={values.isInvestor === "finance seeker"}
                                                onChange={() => setFieldValue("isInvestor", "Investor")}
                                            />
                                            <span>Investor</span>

                                            {
                                                errors.isInvestor && touched.isInvestor ? (
                                                    <label className='admin-form-error'>{errors.isInvestor}</label>
                                                ) : null
                                            }
                                        </div>
                                        {/* <Link to="/create-profile" className='btnSignupAccount'>Sign up <FontAwesomeIcon icon={faArrowRight}/></Link> */}
                                        <button className='btnSignupAccount' type='submit'>
                                            {isSigningUp && <div className='dt-save-spinner mr-3'></div>}
                                            {isSigningUp && "Signing up... "}
                                            {!isSigningUp && <>Sign up <FontAwesomeIcon icon={faArrowRight} /></>}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7 p-0'>
                            {!isThereError && 
                            <div className="signup-right" data-aos="fade-in">
                                <div className="signup-right-content">
                                    <div className='p-5'>
                                        <h2>Join Investiganza</h2>
                                        <p className='pt-4'>we need to bring some change by providing such a platform or market place that facilitate the meeting of investors and business makers for the purpose of business deals and agreements</p>
                                        <div className="mt-5">
                                            <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faGoogle} /></a>
                                            <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faFacebook} /></a>
                                            <a href="#" className="login-sociallogin"><FontAwesomeIcon icon={faLinkedin} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                            {isThereError &&
                                <div className='signup-error-cont' data-aos="fade-up">
                                    <div className='signup-error-inner'>
                                        <div >
                                            <img src='images/signupsvg4.svg'/>
                                            <div className='mt-5 text-left'>
                                                {
                                                    signupErrors.map((err)=>{
                                                        console.log(err)
                                                       return (
                                                        <label className='signup-fail-error'>
                                                        <div className='signup-err-pulse'></div>
                                                        {err.description}
                                                    </label>
                                                       )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                {/* <div className='signup-loader-container'>
                    <div className='signup-loader-inner'>
                        <h5>creating account ...</h5>
                    </div>
                </div> */}
            </section>


            <Footer />
        </>
    )
}

export default Signup