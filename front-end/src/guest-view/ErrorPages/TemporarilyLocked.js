import React, { useEffect, useState } from 'react'
import './TemporarilyLocked.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setProfileData } from '../../ReduxHub/index'
import Aos from 'aos';
import "aos/dist/aos.css";

const TemporarilyLocked = () => {


    
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function Logout()
    {
        dispatch(setProfileData(null));
        navigate('/login')
    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);


  return (
    <>
        <section className='temp-locked-sec'>
            <div className='container'>
                <div className='row' data-aos="fade-right">
                    <div className='col-md-6'>
                        <div className='temp-locked-left'>
                            <img src='/images/error5.svg'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='temp-locked-right'>
                            <div>
                                <h3>Your Account has been temporarily locked</h3>
                                <p>
                                    We have detected suspicious activity on your Investiganza Account
                                    and we have temporarily locked it as a security precautions
                                </p>
                                <p>
                                    We will investigate your account then you will be able to access it.
                                </p>
                                <button className='temp-locked-btn-why'>Why am I seeing this ?</button>
                                <br/>
                                <button onClick={()=>Logout()} className='temp-locked-btn-logout'>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TemporarilyLocked