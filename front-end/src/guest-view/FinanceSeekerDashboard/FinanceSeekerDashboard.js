import { faBars, faComment, faEye, faHandshake, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import './FinanceSeekerDashboard.css';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';

const FinanceSeekerDashboard = () => {
  return (
    <>
      <AfterLoginNav/>
        <section className='fs-main-cont'>
          <div className='container'>
            
            <div className='row mt-3'>
              <div className='col-md-12'>
                <div className='fs-main-intro'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-8'>
                        <span className='fs-welcome'>WELCOME BACK</span>
                        <h2 className='fs-name'>Muhammad Subhan Raza</h2>
                        <p className='fs-tag'>Finance Seeker</p>
                      </div>
                      <div className='col-md-4 pl-4'>
                      <span className='fs-welcome'>ABOUT</span>
                      <p className='text-white'>lorem lorem ipsum makr lorem lorem ipsum makr lorem lorem ipsum makr lorem lorem ipsum makr </p>
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
                      <div className='col-md-6'>
                        <div className='fs-post-item'>
                          <span className='fs-item-head'><FontAwesomeIcon icon={faPaperclip}/></span>
                          <span>AMOUNT DEMANDED</span>
                          <h5>Rs. 50000</h5>
                          <p className='mt-2'>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                          </p>
                          <button>Go To The Post</button>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='fs-post-item'>
                          <span className='fs-item-head'><FontAwesomeIcon icon={faPaperclip}/></span>
                          <span>AMOUNT DEMANDED</span>
                          <h5>Rs. 50000</h5>
                          <p className='mt-2'>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                          </p>
                          <button>Go To The Post</button>
                        </div>
                      </div>
                      
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
                    <h2>100</h2>
                  </div>
                </div>
                <div className='fs-indicator mt-3'>
                  <span className='fs-ind-icon'>
                    <FontAwesomeIcon icon={faHandshake}/>
                  </span>
                  <div className='pl-4'>
                    <span>TOTAL CONNECTION</span>
                    <h2>100</h2>
                  </div>
                </div>
                <div className='fs-indicator mt-3'>
                  <span className='fs-ind-icon'>
                    <FontAwesomeIcon icon={faComment}/>
                  </span>
                  <div className='pl-4'>
                    <span>TOTAL FEEDBACKS</span>
                    <h2>100</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default FinanceSeekerDashboard