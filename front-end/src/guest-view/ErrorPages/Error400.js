import React from 'react'
import './Error400.css';

const Error400 = () => {
  return (
    <>
    
    <section class="notfound-main-sec">
        <div class="notfound-content-cont">
            <img src="images/error5.svg" alt=""/>
            <h4>404</h4>
            <h5>OOPS! Page Not found</h5>
            <h6>
                Sorry but the page you are looking for does not exist, have been removed, name changed or is temporary unavailable
            </h6>
            <button>Go To Home</button>
            <br/>
            <a href="#">Why am i seeing this ?</a>
            <br/>
        </div>
    </section>
    
    </>
  )
}

export default Error400