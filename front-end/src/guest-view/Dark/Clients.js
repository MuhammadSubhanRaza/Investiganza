

import React from 'react'
import './custom.css';

const Clients = () => {
  return (
    <section className='home-clients-sec'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='home-clients-sec-header'>
              <h6>User Feedback</h6>
              <h1>What Our Clients Say About Us</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit Ullam reiciendis voluptas aperiam voluptatum nobis <br />  iure nulla optio? Inventore, cum? Mollitia maiores enim
              </p>
            </div>
            <div className='home-clients-sec-body'>
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className='row'>
                      <div className='col-md-8 col-sm-12 offset-md-2'>
                        <div className='home-client-card'>
                            <div className='client-img-holder'>
                            <img src='images/c2.jpg'/>
                            </div>
                            <h5>Moiz Madni Khan</h5>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                  <div className='row'>
                      <div className='col-md-8 col-sm-12 offset-md-2'>
                        <div className='home-client-card'>
                            <div className='client-img-holder'>
                            <img src='images/c3.jpg'/>
                            </div>
                            <h5>Arham Khan</h5>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                  <div className='row'>
                      <div className='col-md-8 offset-md-2'>
                        <div className='home-client-card'>
                            <div className='client-img-holder'>
                            <img src='images/c4.jpg'/>
                            </div>
                            <h5>Sara Dwyene</h5>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
