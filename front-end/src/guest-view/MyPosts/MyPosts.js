import React, { useEffect, useState } from 'react'
import './MyPosts.css';
import Footer from '../Common/Footer';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import { useSelector } from 'react-redux';
import { getmyAllPosts } from './MyPostsService';

const MyPosts = () => {


    
    // -------------------- REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal)

     // ------------------ INITIALS

     const [allPosts, setallPosts] = useState([]);
     const [isDataLoading, setisDataLoading] = useState(true);
     const imageUrl = 'http://localhost:5070/uploads/';


    //------------------ LOAD POSTS


    async function loadAllPosts()
    {
        let data = await getmyAllPosts(myState.id);
        setTimeout(() => {
            setallPosts(data)
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
            <h1>My All Posts</h1>
        </div>
        <div className='myAllPosts-body'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='container-fluid'>

                        {
                            isDataLoading && 
                            <>
                                <p className='text-center'>Loading your posts...</p>
                                <div className='create-prop-loader'></div>
                            </>
                        }

                        {
                            !isDataLoading && 
                            
                                <div className='row'>


                                    {
                                        allPosts.map((item)=>{
                                            return <div className='col-md-4'>
                                                    <div className='mypostcard-allposts'>
                                                        <div className='mpc-header'>
                                                            <img src={imageUrl+item.images[0].imagePath}/>
                                                        </div>
                                                        <div className='mpc-body'>
                                                            <h6 className='mt-3'>{item.subject}</h6>
                                                            <div className='mpc-description'>
                                                                <p>{item.description}</p>
                                                            </div>
                                                            <span>Required Amount</span>
                                                            <h6>Rs. {item.amount}</h6>
                                                        </div>
                                                        <div className='mpc-footer'>
                                                            <button>View Post</button>
                                                        </div>
                                                    </div>
                                                </div>
                                        })
                                    }

                                    
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    <Footer/>
    </>
  )
}

export default MyPosts