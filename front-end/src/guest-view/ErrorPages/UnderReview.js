import React, { useEffect } from 'react'
import './review.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const UnderReview = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
    <>
    
    <section className="review-main-sec">
        <div className="review-content-cont" >
            <div  data-aos="fade-down">
            <img src="images/review_svg1.svg" alt=""/>
            <h4>Congratulations!</h4>
            <h6>Your profile has been created</h6>
            <h5 className='mt-3'>Your profile is under review</h5>
            <h6>
                It will be available for you as soon as you get verified. It may take 3 to 5 days to verify
            </h6>
            <button>logout</button>
            <br/>
            <a href="#">Why am I seeing this ?</a>
            </div>
        </div>
    </section>

    </>
  )
}

export default UnderReview