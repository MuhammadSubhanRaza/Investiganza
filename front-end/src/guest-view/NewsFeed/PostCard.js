
import { faInfoCircle, faScroll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import './PostCard.css';
import {Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

const PostCard = (props) => {
    
    
  const navigate = useNavigate();

    let allPosts = props.details

    const imageUrl = 'http://localhost:5070/uploads/';


    function loadCreateProposal(id)
    {
        navigate('/create-proposal/'+id)
    }

    function loadProposalDetails(id)
    {
        navigate('/proposal-details/'+id)
    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

  return (
    <>
        <div className='newsfeed-post-card' data-aos="fade-up">
            <div className='newsfeed-post-header'>
                <div className='d-flex align-items-center'>
                    <img style={{width:'50px',height:'50px'}} src={allPosts.pofilePath}/>
                    <div className='ml-3'>
                        <h6>{allPosts.userName}</h6>
                        <span>{allPosts.date}</span>
                    </div>
                </div>
            </div>
            <div className='newsfeed-post-body'>
                <h6>{allPosts.subject}</h6>
                <p className="newsfeed-card-desc">
                {allPosts.description}
                </p>
                <div className='d-flex justify-content-center'>
                <img src={imageUrl+allPosts.images[0].imagePath}/>
                {/* <img src='images/resturant2.jpg'/> */}
                </div>
                <div className='amount-required-sec pt-3'>
                    <span>Estimated Required Amount</span>
                    <h3>Rs. {allPosts.amount}</h3>
                </div>
            </div>
            <div className='newsfeed-post-foooter'>
                <div className='text-right'>
                    <button className='mr-3 nf-post-btns' onClick={()=>loadProposalDetails(allPosts.postId)}><FontAwesomeIcon icon={faInfoCircle}/> View Details</button>
                    <button className='mr-3 nf-post-btns' onClick={()=>loadCreateProposal(allPosts.postId)}><FontAwesomeIcon icon={faScroll}/> Send Proposal</button>
                    {/* <button><FontAwesomeIcon icon={faScroll}/> Send Proposal</button> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default PostCard
