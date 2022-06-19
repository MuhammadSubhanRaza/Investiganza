
import React from 'react'
import { faChartLine, faCoffee, faMoneyCheckDollar, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutContent = () => {
    return (
        <>
            <section className='aboutcontent-sec-indicators'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='aboutcontent-ind-card' data-aos="fade-up">
                                <span>
                                    <FontAwesomeIcon icon={faCoffee} />
                                </span>
                                <h5>Heading Here</h5>
                                <p>
                                    voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores
                                    voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='aboutcontent-ind-card' data-aos="fade-up">
                                <span>
                                    <FontAwesomeIcon icon={faCoffee} />
                                </span>
                                <h5>Heading Here</h5>
                                <p>
                                    voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores
                                    voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='aboutcontent-ind-card' data-aos="fade-up">
                                <span>
                                    <FontAwesomeIcon icon={faCoffee} />
                                </span>
                                <h5>Heading Here</h5>
                                <p>
                                    voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores
                                    voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='aboutcontent-ind-card' data-aos="fade-up">
                                <span>
                                    <FontAwesomeIcon icon={faCoffee} />
                                </span>
                                <h5>Heading Here</h5>
                                <p>
                                    voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores
                                    voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='aboutcontent-sec-ribbon'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 p-0'>
                            <div className='abt-sec-left'>
                                <div data-aos="fade-left">
                                    <h3>Where ideas grow</h3>
                                    <div className='about-sec-left-divider'></div>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis volupta Mollitia maiores enim commodi non accusamus!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 p-0'>
                            <div className='abt-sec-right'>
                                <h3>Why Finance Seeker choose us?</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperi</p>
                                <ul>
                                    <li>We are trusted</li>
                                    <li>A large number of Investors</li>
                                    <li>Continuous Monitoring</li>
                                    <li>No Fraud</li>
                                    <li>Enhance Business</li>
                                    <li>Vast Resources</li>
                                    <li>Less Risk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='aboutcontent-sec-ribbon'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 p-0'>
                            <div className='abt-sec-right text-right'>
                                <h3>Why Finance Seeker choose us?</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperi</p>
                                <ul>
                                    <li>We are trusted</li>
                                    <li>A large number of Investors</li>
                                    <li>Continuous Monitoring</li>
                                    <li>No Fraud</li>
                                    <li>Enhance Business</li>
                                    <li>Vast Resources</li>
                                    <li>Less Risk</li>
                                </ul>
                            </div>

                        </div>
                        <div className='col-md-6 p-0'>
                            <div className='abt-sec-left-2'>
                                <div data-aos="fade-right">
                                    <h3>Where ideas grow</h3>
                                    <div className='about-sec-left-divider'></div>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis volupta Mollitia maiores enim commodi non accusamus!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutContent

