
import { faInfoCircle, faScroll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './PostCard.css';
import {Link } from 'react-router-dom';

const PostCard = () => {
  return (
    <>
        <div className='newsfeed-post-card'>
            <div className='newsfeed-post-header'>
                <div className='d-flex align-items-center'>
                    <img src="images/c7.jpg"/>
                    <div className='ml-3'>
                        <h6>Muhammad Subhan Raza</h6>
                        <span>02/02/2022</span>
                    </div>
                </div>
            </div>
            <div className='newsfeed-post-body'>
                <h6>New Startup of Resturant</h6>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis voluptas aperiam voluptatum nobis iure nulla optio? Inventore, cum? Mollitia maiores enim commodi non accusamus!
                </p>
                <div className='d-flex justify-content-center'>
                <img src='images/resturant.jpg'/>
                <img src='images/resturant2.jpg'/>
                </div>
                <div className='amount-required-sec pt-3    '>
                    <span>Estimated Required Amount</span>
                    <h3>$ 70000</h3>
                </div>
            </div>
            <div className='newsfeed-post-foooter'>
                <div className='text-right'>
                    <Link className='mr-3 nf-post-btns' to="/proposal-details"><FontAwesomeIcon icon={faInfoCircle}/> View Details</Link>
                    <Link className='mr-3 nf-post-btns' to="/create-proposal"><FontAwesomeIcon icon={faScroll}/> Send Proposal</Link>
                    {/* <button><FontAwesomeIcon icon={faScroll}/> Send Proposal</button> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default PostCard
