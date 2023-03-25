import { faBars, faComment, faEye, faHandshake, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './FinanceSeekerDashboard.css';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Aos from 'aos';
import "aos/dist/aos.css";
import { GetDashboardDetails } from './FinanceSeekerDashboardService';
import { useSelector } from 'react-redux';

const FinanceSeekerDashboard = () => {



  const navigate = useNavigate()
    // -------------------- REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal)


    const [details, setdetails] = useState({});
    const [AllPosts, setAllPosts] = useState([]);
    const [isDataLoading, setisDataLoading] = useState(true);


    // ---------------- LOAD DETAILS


    async function loadDetails()
    {
        let data = await GetDashboardDetails(myState.id);
        setTimeout(() => {
            setdetails(data)
            setPosts(data.posts)
            setisDataLoading(false)
            console.log(data)
        }, 2000);
    }

    function setPosts(posts)
    {
        if(posts.length==0)
        {
          setAllPosts([])
        }
        else if(posts.length > 2)
        {
            setAllPosts(posts.slice(3))
        }
        else{
            setAllPosts(posts)
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
        <section className='fs-main-cont' data-aos="fade-up">
          <div className='container'>
            
            <div className='row mt-3'>
              <div className='col-md-12'>
                <div className='fs-main-intro'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-8'>
                        <span className='fs-welcome'>WELCOME BACK</span>
                        <h2 className='fs-name'>{details.name}</h2>
                        <p className='fs-tag'>Finance Seeker</p>
                      </div>
                      <div className='col-md-4 pl-4'>
                      <span className='fs-welcome'>ABOUT</span>
                      <p className='text-white'>{details.about}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-md-8'>
                <div className='fs-allposts'>
                  <div className='cotainer'>
                    <div className='row'>
                      <div className='col-md-8'>
                        <h6>Recent Posts</h6>
                      </div>
                      <div className='col-md-4 text-right'>
                        <Link to=""><FontAwesomeIcon icon={faEye}/> View All Posts</Link>
                      </div>
                    </div>
                  </div>
                  <div className='cotainer'>
                    <div className='row mt-5'>
                      {
                        AllPosts.map((item)=>{
                          return  <div className='col-md-6'>
                                    <div className='fs-post-item'>
                                      <span className='fs-item-head'><FontAwesomeIcon icon={faPaperclip}/></span>
                                      <span>AMOUNT DEMANDED</span>
                                      <h5>{item.amount}</h5>
                                      <p className='mt-2'>
                                        {item.subject}
                                      </p>
                                      <button>Go To The Post</button>
                                    </div>
                                  </div>
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='fs-indicator'>
                  <span className='fs-ind-icon'>
                    <FontAwesomeIcon icon={faBars}/>
                  </span>
                  <div className='pl-4'>
                    <span>TOTAL POSTS</span>
                    <h2>{details.totalPosts}</h2>
                  </div>
                </div>
                <div className='fs-indicator mt-3'>
                  <span className='fs-ind-icon'>
                    <FontAwesomeIcon icon={faHandshake}/>
                  </span>
                  <div className='pl-4'>
                    <span>TOTAL CONNECTION</span>
                    <h2>{details.totalConnections}</h2>
                  </div>
                </div>
                <div className='fs-indicator mt-3'>
                  <span className='fs-ind-icon'>
                    <FontAwesomeIcon icon={faComment}/>
                  </span>
                  <div className='pl-4'>
                    <span>TOTAL FEEDBACKS</span>
                    <h2>{details.totalFeedbacks}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        }
    </>
  )
}

export default FinanceSeekerDashboard