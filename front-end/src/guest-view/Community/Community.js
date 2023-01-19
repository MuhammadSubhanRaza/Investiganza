import { faChartArea, faEye, faHandshake, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import CommunityCard from './CommunityCard'
import './Community.css';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Footer from '../Common/Footer';
import { getAllProfiles } from './CommunityService';

const Community = () => {


    // ------------------ INITIALS

    const [allProfiles, setallProfiles] = useState([]);
    const [isDataLoading, setisDataLoading] = useState(true);

   //------------------ LOAD POSTS

   async function loadAllProfiles()
   {
       let data = await getAllProfiles();
       setTimeout(() => {
           setallProfiles(data)
           setisDataLoading(false)
       }, 2000);
   }

   

   // --------------- USEEFFECT 


   useEffect(() => {
    loadAllProfiles()
   }, []);



    return (
        <>
            <AfterLoginNav/>
            <section className='community-sec-main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='community-page-header'>
                                <h3>People You May Know</h3>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faMagnifyingGlass}/> Search</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search by Name" aria-label="" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        {
                            isDataLoading && 
                            <>
                                <p className='text-center mt-5'>Loading profiles...</p>
                                <div className='create-prop-loader'></div>
                            </>
                        }
                        {
                           !isDataLoading && 
                           allProfiles.map((item)=>{
                            return <CommunityCard profile={item}/> 
                           })
                           
                        }
                    </div>
                </div>
            </section>

<Footer/>
        </>
    )
}

export default Community