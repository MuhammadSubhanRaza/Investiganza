import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react'
import { Globalvalue } from '../../admin-view/Services/CustomGlobalStates';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Footer from '../Common/Footer';
import './NewsFeed.css';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NewsFeed = () => {

    //------------ REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal)

    
    const navigate = useNavigate()


    console.log(myState);
    


    function checkIfProfileIsPresent()
    {
        if(myState.cnic == null)
        {   
            navigate('/create-profile');
        }
    }

    useEffect(() => {
        checkIfProfileIsPresent();
    }, []);

    
  return (
    <>
    
    <AfterLoginNav/>

    <section className='newsfeed-sec-main'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='newsfeed-tag-card'>
                        <a href='#'>IT</a>
                        <a href='#'>Education</a>
                        <a href='#'>Food</a>
                        <a href='#'>New Startups</a>
                        <a href='#'>Agency</a>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='newsfeed-stream-part'>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    
    </>
  )
}

export default NewsFeed