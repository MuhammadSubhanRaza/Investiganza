import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Footer from '../Common/Footer';
import './MyProposals.css';
import { getmyAllProposals } from './MyProposalsService';

const MyProposals = () => {


    // -------------------- REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal)

     // ------------------ INITIALS

     const [allProposals, setallProposals] = useState([]);
     const [isDataLoading, setisDataLoading] = useState(true);


    //------------------ LOAD POSTS

    async function loadAllPosts()
    {
        let data = await getmyAllProposals(myState.id);
        setTimeout(() => {
            setallProposals(data)
            setisDataLoading(false)
        }, 2000);
    }


    // --------------- USEEFFECT 


    useEffect(() => {
        loadAllPosts()
    }, []);


  return (
    <>
    
    <AfterLoginNav/>
      
        <div className='myAllPosts-header'>
            <h1>My All Proposals</h1>
        </div>
        <div className='myAllPosts-body'>
            <div className='container'>
                <div className='row'>
                    
                    <div className='col-md-10 offset-md-1'>

                        {
                            isDataLoading && 
                            <>
                                <p className='text-center'>Loading your posts...</p>
                                <div className='create-prop-loader'></div>
                            </>
                        }
                        {
                            !isDataLoading && 
                        

                            allProposals.map((item)=>{
                                return <div className='myProposals-card'>
                                            <span>Amount Offered</span>
                                            <h5>Rs. {item.amount}</h5>
                                            <div className='proposal-details'>
                                                <h6>{item.message}</h6>
                                            </div>
                                            <button>View Proposal</button>
                                        </div>
                            })

                            
                        }
                    </div>

                </div>
            </div>
        </div>
   
    <Footer/>
    </>
  )
}

export default MyProposals