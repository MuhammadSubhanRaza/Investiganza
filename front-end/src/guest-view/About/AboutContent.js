
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
                                <h5>Financial Stablity</h5>
                                <p>Existing Business can join investiganza to double their profits or can invest in other business to enjoy the quality of life with new business stakes</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='aboutcontent-ind-card' data-aos="fade-up">
                                <span>
                                    <FontAwesomeIcon icon={faCoffee} />
                                </span>
                                <h5>Profitablity</h5>
                                <p>Profitablity ensures the a handsome margin of profit as per the idea stablity presented. All parties involved are assured to get their margin</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='aboutcontent-ind-card' data-aos="fade-up">
                                <span>
                                    <FontAwesomeIcon icon={faCoffee} />
                                </span>
                                <h5>Finance Anytime</h5>
                                <p>Finance anytime or requirment of finance for the startup or existing setup, is entertained anytime according to the procedure of the organization of Investiganza </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='aboutcontent-ind-card' data-aos="fade-up">
                                <span>
                                    <FontAwesomeIcon icon={faCoffee} />
                                </span>
                                <h5>Meetings</h5>
                                <p>Investor and Finance seeker may schedule a meeting after they are agreed upon the proposals and the profit sharing with collaboration of Investiganza</p>
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
                                    <h3>We respect your ideas</h3>
                                    <div className='about-sec-left-divider'></div>
                                    <p>
                                        Your ideas are valueable for us and we believing in making your ideas a reality because this is what we do and who we are
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 p-0'>
                            <div className='abt-sec-right'>
                                <h3>Why Finance Seeker choose us?</h3>
                                <p>These are the key features which justify that why we should be choosen for your business</p>
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
                                <h3>Why Investors choose us?</h3>
                                <p>These are the key features which justify that why we should be choosen for your business</p>
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
                                        Your success is hidden in the business you do and the idea you evolve with and we are the ones who will push your ideas
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

