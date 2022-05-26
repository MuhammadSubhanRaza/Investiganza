
import { faPaperPlane, faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Subscribe = () => {
    return (
        <section className='home-subscribe-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='home-about-sec-header'>
                            <h6>Stay Connected</h6>
                            <h1>get In touch with us</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit Ullam reiciendis voluptas aperiam voluptatum nobis <br />  iure nulla optio? Inventore, cum? Mollitia maiores enim
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
