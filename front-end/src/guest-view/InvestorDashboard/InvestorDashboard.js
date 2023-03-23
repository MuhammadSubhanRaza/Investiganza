import { faAndroid, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faComment, faEye,faHandshake,faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import './InvestorDashboard.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { GetDashboardDetails } from './InvestorDashboardService';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const InvestorDashboard = () => {


    const navigate = useNavigate()

    // -------------------- REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal)


    const [details, setdetails] = useState({});
    const [allProposals, setallProposals] = useState([]);
    const [isDataLoading, setisDataLoading] = useState(true);


    // ------------------ LOAD PROFILE

    function loadProfile(id)
    {
        navigate('/profiledetails/'+id)
    }


    // ---------------- LOAD DETAILS


    async function loadDetails()
    {
        let data = await GetDashboardDetails(myState.id);
        setTimeout(() => {
            setdetails(data)
            setProposals(data.proposals)
            setisDataLoading(false)
        }, 2000);
    }


    function setProposals(proposals)
    {
        if(proposals.lensth==0)
        {
            setallProposals([])
        }
        else if(proposals.lensth > 2)
        {
            setallProposals(proposals[0,1])
        }
        else{
            setallProposals(proposals)
        }
    }
    
  // --------------- USE EFFECT

  useEffect(() => {
    Aos.init({duration:2000})
    loadDetails()
  }, []);

  return (
    <>
    <AfterLoginNav/>

    {isDataLoading && <div className='bars-load'></div>}

    {!isDataLoading &&     

        <section className='investor-dashboard-sec' data-aos="fade-up">
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col-md-4'>
                        <div className='inv-dbd-indicator'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <span>Total Proposals</span>
                                        <h5>{details.totalProposals}</h5>
                                    </div>
                                    <div className='col-md-4 text-right'>
                                        <span className='inv-dbd-indicator-icon'>
                                            <FontAwesomeIcon icon={faBars}/>
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
                                        <span>Total Connections</span>
                                        <h5>{details.totalConnections}</h5>
                                    </div>
                                    <div className='col-md-4 text-right'>
                                        <span className='inv-dbd-indicator-icon'>
                                            <FontAwesomeIcon icon={faHandshake}/>
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
                                        <span>Total Feedbacks Given</span>
                                        <h5>{details.totalFeedbacks}</h5>
                                    </div>
                                    <div className='col-md-4 text-right'>
                                        <span className='inv-dbd-indicator-icon'>
                                            <FontAwesomeIcon icon={faComment}/>
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
                                <h5>{details.name}</h5>
                                <p>
                                    {details.about}
                                </p>
                                <button onClick={()=>loadProfile(details.profileId)}><FontAwesomeIcon icon={faEye} className="mr-2"/> View Profile</button>
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
                            {

                               

                                allProposals.map((item)=>{
                                    return <div className='inv-dbd-proposal'>
                                                <button className='inv-dbd-proposal-btn'>
                                                    <div className='text-left'>
                                                    <span>Amount Offered</span> <span className='text-primary'>Rs. {item.amount}</span>
                                                        <p>{item.message}</p>
                                                    </div>
                                                </button>
                                            </div>
                                })
                            }
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
}
    </>
  )
}

export default InvestorDashboard