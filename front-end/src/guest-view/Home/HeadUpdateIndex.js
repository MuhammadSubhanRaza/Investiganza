
import React,{useEffect} from 'react'
import './custom.css';
import Navigation from './../Common/Navigation';
import Aos from 'aos';
import "aos/dist/aos.css";



const HeadUpdateIndex = () => {
  return (
    <>
        <header>
                <Navigation />
                <div className='video-back'>
                    <video src='videos/guest/manwalk.mp4' autoPlay muted loop />
                    <div className='header-content-container'  >
                        <div className='header-content container'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='index-new-header-cont' data-aos="zoom-in">
                                        <div>
                                            <h6>Do you want to grow ?</h6>
                                            <h1>New Opportunities On Your Way</h1>
                                            <p>
                                            start a business or invest money for the business is extremely difficult as it’s quite difficult to find the investors for the business startup or business extension.
                                  
                                            so why not find a place to pitch your ideas and find investors
                                            </p>
                                            <div className='pt-5'>
                                            <a href="#" className='explr-more'>Explore More</a>
                                            <a href="#" className='join-us-index-btn'>Join Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    </>
  )
}

export default HeadUpdateIndex