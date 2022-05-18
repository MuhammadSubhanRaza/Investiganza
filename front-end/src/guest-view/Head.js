
import React from 'react'
import './custom.css';
import Navigation from './Navigation';

const Head = () => {
    return (
        <>
            <header>
                <Navigation />
                <div className='video-back'>
                    <video src='videos/guest/7.mp4' autoPlay muted loop />
                    <div className='header-content-container'>
                        <div className='header-content container'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='slider-text-part'>
                                                    <h6>Do You Want to invest ?</h6>
                                                    <h1>
                                                        HELLO
                                                    </h1>
                                                    <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
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
                                                    <h6>What we do ?</h6>
                                                    <h1>
                                                        Slide 2
                                                    </h1>
                                                    <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
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
