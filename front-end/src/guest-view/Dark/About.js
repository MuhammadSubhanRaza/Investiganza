import { faAnchor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const About = () => {
  return (
    <section className='home-sec-about'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='home-about-sec-header'>
              <h6>What is Investiganza</h6>
              <h1>The Investment You Need</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit Ullam reiciendis voluptas aperiam voluptatum nobis <br />  iure nulla optio? Inventore, cum? Mollitia maiores enim
              </p>
            </div>
            <div className='home-about-sec-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='home-about-item'>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faAnchor} />
                      </span>
                    </p>
                    <div>
                      <h6>Heading here</h6>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas
                      </p>
                    </div>
                  </div>
                  <div className='home-about-item'>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faAnchor} />
                      </span>
                    </p>
                    <div>
                      <h6>Heading here</h6>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas
                      </p>
                    </div>
                  </div>
                  <div className='home-about-item'>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faAnchor} />
                      </span>
                    </p>
                    <div>
                      <h6>Heading here</h6>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas
                      </p>
                    </div>
                  </div>
                  
                </div>
                <div className='col-md-6'>
                  <img src='images/graph.png' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About