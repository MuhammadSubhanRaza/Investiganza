import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import './ViewAllFeedbacks.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

const ViewAllFeedbacks = (props) => {

    const navigate = useNavigate()

    const {data} = props

    useEffect(() => {
        
        Aos.init({duration:2000})
    }, []);

    function loadProfile(id)
    {
        navigate('/profiledetails/'+id)
    }

  return (
    <>
        <div className='view-all-feedback-comp' data-aos="fade">
            <div className='view-all-feedback-item'>
                <div>
                    <img src={data.profileImagePath}/>
                </div>
                <div className='pl-3'>
                    {/* <h6>Muhammad Subhan Raza</h6> */}
                    <button onClick={()=>loadProfile(data.profileId)}>{data.name}</button>
                    <br/>
                    <span>{data.date}</span>
                    <div className='pt-2 pb-2'>
                        <span className='view-all-feed-star'><FontAwesomeIcon icon={faStar}/></span>
                        <span className='view-all-feed-star'><FontAwesomeIcon icon={faStar}/></span>
                        <span className='view-all-feed-star'><FontAwesomeIcon icon={faStar}/></span>
                        <span className='view-all-feed-star'><FontAwesomeIcon icon={faStar}/></span>
                        <span className='view-all-feed-star'><FontAwesomeIcon icon={faStar}/></span>
                    </div>
                    <p>
                        {data.message}
                    </p>
                    {/* <button><FontAwesomeIcon icon={faEye} className="mr-2"/> View Profile</button> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default ViewAllFeedbacks