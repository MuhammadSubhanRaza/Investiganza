import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import Footer from '../Common/Footer'
import Navigation from '../Common/Navigation'
import './Policies.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const Policies = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    });

    return (
        <>
            <Navigation />

            <section className='policies-sec-main'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 p-0'>
                            <div className='policies-page-header'>
                                <div>
                                    <h3>Terms and poliies</h3>
                                    <p>All the members of Investiganza must abide by the policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='policies-page-body'  data-aos="fade-up">
                                <div>
                                    <a href='documents/InvestiganzaPolicies.pdf' target="blank" className='btn-dwnld-plcs'>Download Policies in PDF</a>
                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        After creation of account, it will take almost 3 to 5 days to approve.
                                        Otherwise, login to the system will not be allowed
                                    </div>


                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        Details given at the time of Account Creation must be correct and valid.
                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        If any of the given information was found wrong, the system will block that
                                        account and it will not be logged in again.
                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        When post/request for the financial assistance is created, the description
                                        must be in a proper format and must follow the ethical words and
                                        sentence.
                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        Communication with the Financer must be in formal and legal way.
                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        Investiganza will be responsible for arranging the meeting between the
                                        Investors and Finance Seeker.

                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        Investiganza will charge 5% of the entire profit only when the company
                                        earns the profit.
                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        Any Complain against the Investor or Finance Seeker will surely be a
                                        trouble.
                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        Investiganza has the right to block any user from the system if they are
                                        found in any illegal activities.
                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        Illegal activities or business startups are highly discouraged which means no
                                        business of any wrong kind can be posted here.
                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        .Investiganza has right to call a meeting of business collaborators for the
                                        progress
                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        All the financial deals and its data can not be kept hidden from the
                                        Investiganza.

                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        All the policies are strict and straight forward and they must be followed.

                                    </div>

                                    <div className='policies-points d-flex pl-5'>
                                        <FontAwesomeIcon className='policy-point-check' icon={faCheck} />
                                        Legal actions can be taken if any user does not abide the rules mentioned
                                        here
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='policies-page-body text-center mt-5'>
                                <img src='images/signupsvg1.svg' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default Policies