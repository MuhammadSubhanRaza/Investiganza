
import React,{useEffect} from 'react'
import './custom.css';
import Navigation from './../Common/Navigation';
import Aos from 'aos';
import "aos/dist/aos.css";

const Head = () => {


    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    return (
        <>
            <header>
                <Navigation />
                <div className='video-back'>
                    <video src='videos/guest/7.mp4' autoPlay muted loop />
                    <div className='header-content-container'  data-aos="fade-left">
                        <div className='header-content container'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='slider-text-part'>
                                                    <h6>Do You Want to invest ?</h6>
                                                    <h1>
                                                        Welcome to Investiganza
                                                    </h1>
                                                    <p>
                                                    start a business or invest money for the business is extremely difficult as it’s quite difficult to find the investors for the business startup or business extension
                                                    </p>
                                                    <a href='#'>Explore More</a>
                                                </div> 
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='slider-img-part'>
                                                    <img src='images/laptop.png'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                    <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='slider-text-part'>
                                                    <h6>What we do?</h6>
                                                    <h1>
                                                        DO you have an idea?
                                                    </h1>
                                                    <p>
                                                    Establishing the new businesses by business makers and for investors to invest their money is a big problem to make a trustworthy agreement and not having the any opportunity or platform around there
                                                    </p>
                                                    <a href='#'>Explore More</a>
                                                </div> 
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='slider-img-part'>
                                                    <img src='images/graph.png'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <section></section> */}
        </>
    )
}

export default Head
