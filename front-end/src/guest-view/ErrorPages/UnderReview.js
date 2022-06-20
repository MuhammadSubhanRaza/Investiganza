import React from 'react'
import './review.css';

const UnderReview = () => {
  return (
    <>
    
    <section class="review-main-sec">
        <div class="review-content-cont">
            <img src="images/review_svg1.svg" alt=""/>
            <h4>Sorry for inconvenience</h4>
            <h5>Your profile is under review</h5>
            <h6>
                It will be available for you as soon as you get verified. It may take 3 to 5 days to verify
            </h6>
            <button>logout</button>
            <br/>
            <a href="#">Why am I seeing this ?</a>
        </div>
    </section>

    </>
  )
}

export default UnderReview