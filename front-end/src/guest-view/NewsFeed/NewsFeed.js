import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import { Globalvalue } from '../../admin-view/Services/CustomGlobalStates';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Footer from '../Common/Footer';
import './NewsFeed.css';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllCategories, fetchAllData } from './NewsFeedService';

const NewsFeed = () => {

    //------------ REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal)


    const navigate = useNavigate();
    const [isDataLoading, setisDataLoading] = useState(true);
    const [postList, setpostList] = useState([]);
    const [categoriesList, setcategoriesList] = useState([]);
    const [MainData, setMainData] = useState([]);

    

    

    function checkIfProfileIsPresent()
    {
        if(myState.cnic == null)
        {   
            navigate('/create-profile');
        }
    }

    // ------------------- FILTER POSTS

    function filterPosts(id)
    {
        if(id==-1)
        {
            setpostList(MainData)
        }
        else
        {
            let newData = MainData.filter(record=>record.categoryId == id)
            setpostList(newData)
        }
    }


    // ----------------- LOAD DATA

    async function fetchData() {
        const myData = await fetchAllData();
        setTimeout(() => {
            setpostList(myData.data)
            setMainData(myData.data)
            setisDataLoading(false)
        }, 2000);
      }

      async function fetchCategories() {
        const myData = await fetchAllCategories();
        setTimeout(() => {
            setcategoriesList(myData.data)
        }, 2000);
      }

    useEffect(() => {
        checkIfProfileIsPresent();
        fetchData()
        fetchCategories()
    }, []);

    
  return (
    <>
    
    <AfterLoginNav/>

    <section className='newsfeed-sec-main'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='newsfeed-tag-card'>
                    

                        {
                            isDataLoading && 
                            <div className='newsfeed-spinner'></div>
                        }
                        {
                            !isDataLoading && <button className='btn d-block' onClick={()=>filterPosts(-1)}>All</button>
                        }
                        {
                            categoriesList.map((item)=>{
                                return <button className='btn d-block' onClick={()=>filterPosts(item.id)}>{item.name}</button>
                            })
                        }

                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='newsfeed-stream-part'>

                    {
                        isDataLoading && <div className='newsfeed-spinner'></div>
                    }

                    
                    {
                        postList.map((item)=>{
                            return <PostCard details={item}/>
                        })
                    }

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