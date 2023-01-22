import { faAndroid, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye,faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import './InvestorDashboard.css';

const InvestorDashboard = () => {
  return (
    <>
    <AfterLoginNav/>
        <section className='investor-dashboard-sec'>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col-md-4'>
                        <div className='inv-dbd-indicator'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <span>Total Posts</span>
                                        <h5>150</h5>
                                    </div>
                                    <div className='col-md-4 text-right'>
                                        <span className='inv-dbd-indicator-icon'>
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                
                            </div>
                            <div className='text-right'>
                                
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='inv-dbd-indicator'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <span>Total Posts</span>
                                        <h5>150</h5>
                                    </div>
                                    <div className='col-md-4 text-right'>
                                        <span className='inv-dbd-indicator-icon'>
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                
                            </div>
                            <div className='text-right'>
                                
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='inv-dbd-indicator'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <span>Total Posts</span>
                                        <h5>150</h5>
                                    </div>
                                    <div className='col-md-4 text-right'>
                                        <span className='inv-dbd-indicator-icon'>
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                
                            </div>
                            <div className='text-right'>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-md-7'>
                        <div className='investor-dbd-desc-first'>
                            <div className='pr-4'>
                                <span>Welcome</span>
                                <h5>Muhammad Subhan Raza</h5>
                                <p>
                                    lorem lorem loremloremlorem lorem lorem lorem lorem lorem lorem lorem
                                </p>
                                <button><FontAwesomeIcon icon={faEye} className="mr-2"/> View Profile</button>
                            </div>
                            <div className='investor-dbd-desc-first-img'>
                                <img src="/images/globeimage2.png"/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='investor-dbd-desc-second'>
                            <h5>Being an Investor</h5>
                            <p>Investiganza allows you to find the business of your interest that enables you to get earn more</p>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-md-7'>
                        <div className='inv-dbd-allproposals'>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <h6 className='w-100'>Recent Proposals</h6>
                                </div>
                                <div className='col-md-3 text-right'>
                                    <button>View all</button>
                                </div>
                            </div>
                            <div className='inv-dbd-proposal'>
                                <button className='inv-dbd-proposal-btn'>
                                    <div className='text-left'>
                                        <span>Amount Offered</span>
                                        <p>Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem</p>
                                    </div>
                                </button>
                            </div>
                            <hr/>
                            <div className='inv-dbd-proposal'>
                                <button className='inv-dbd-proposal-btn'>
                                    <div className='text-left'>
                                        <span>Amount Offered</span>
                                        <p>Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-5'>
                        <div className='inv-dbd-find-posts'>
                            {/* <span><FontAwesomeIcon icon={faPaperclip}/></span> */}
                            <h6 className='mt-3'>Explore Businesses</h6>
                            <p>
                                Find the business of your interest, invest and take the maximum from Investiganza
                            </p>
                            <div className='ml-2 pt-3 pb-3'>
                                <img src='/images/c7.jpg'/>
                                <img src='/images/c5.jpg'/>
                                <img src='/images/c2.jpg'/>
                                <img src='/images/c4.jpg'/>
                                <img src='/images/c5.jpg'/>
                                <span className='inv-plus-span'>+</span>
                            </div>
                            <button>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default InvestorDashboard