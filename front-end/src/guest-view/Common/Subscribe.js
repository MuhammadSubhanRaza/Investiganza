
import { faPaperPlane, faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Subscribe = () => {
    return (
        <section className='home-subscribe-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='home-about-sec-header' data-aos="fade-down">
                            <h6>Stay Connected</h6>
                            <h1>get In touch with us</h1>
                            <p>
                                Investiganza will contact you and let you know the great way to enlighten your future
                            </p>
                            <form>
                                <input type="email" placeholder='Enter Your Email' />
                                <br/>
                                <button type='submit'>
                                    <FontAwesomeIcon icon={faPaperPlane} className="pr-3"/>
                                    send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
