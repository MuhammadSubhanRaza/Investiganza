import React from 'react'
import './UnauthorizedAcess.css'
import { Link } from 'react-router-dom';

const UnauthorizedAcess = () => {
  return (
    <section className='unauthorized-access'>
        <h1 className='unauthorized-403'>403</h1>
        <div>
            <img src='/images/unauthorized.svg'/>
            <h2>We are sorry...</h2>
            <p>
                The page you are trying to access has restricted access <br/>
                Please refer to your system administrator
            </p>
            <Link to="/" className='unauthorized-btn-logout'>Go Back</Link>
        </div>
    </section>
  )
}

export default UnauthorizedAcess