import React, { useEffect, useState } from 'react'
import './ProposalDetails.css'
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import {Link, useNavigate, useParams } from 'react-router-dom';
import { fetchDetails } from './ProposalDetailsService';
import Aos from 'aos';
import "aos/dist/aos.css";


const ProposalDetails = () => {


    // ---------------- GET PARAMS VALUE

    const{postid} = useParams();


    // ---------------- INITIALS


    const navigate = useNavigate()
    const imageUrl = 'http://localhost:5070/uploads/';
    const [PostDetails, setPostDetails] = useState({});
    const [allImages, setallImages] = useState([]);


    // ------------------ LOAD DATA

    async function fetchPostDetails() {
        const myData = await fetchDetails(postid);
        setTimeout(() => {
            console.log(myData.images)
            setallImages(myData.images)
            setPostDetails(myData)
        }, 2000);
      }


      function loadProposalWindow()
      {
        navigate('/create-proposal/'+PostDetails.postId)
      }
    

    
    // ----------------- USEEFFECT

    useEffect(() => {
        fetchPostDetails()
        Aos.init({duration:2000})
    }, []);


  return (
    <>
    
    
      <AfterLoginNav/>

      <div className="postdetial-cont" data-aos="fade-up">
        <div className="pd-left-pane pl-4">
            <div className="pd-pane-header mt-5">
                <img src={PostDetails.pofilePath} alt=""/>
                <div>
                    <h6>{PostDetails.userName}</h6>
                    <span>{PostDetails.date}</span>
                </div>
            </div>
            <div className="pd-amount-required">
                <span>Amount Required</span>
                <h6>Rs. {PostDetails.amount}</h6>
            </div>
           
            <div className="pd-pane-images">
                <h6 className="pane-title">IMAGES</h6>
                
                {
                    allImages.map((item)=>{
                        return <a href={imageUrl+item.imagePath}><img src={imageUrl+item.imagePath} alt=""/></a>
                    })

                }

                
            </div>
            <div className="pd-pane-attachments">
                <h6 className="pane-title">Attachments</h6>
                <a href={imageUrl + PostDetails.document}>
                    <i className="fa fa-file"></i>
                    Attached Document
                </a>
            </div>

            <div className="pr-4">
                <button onClick={()=>loadProposalWindow()} className="pd-send-proposal">Send Proposal</button>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-5">
                    <div className="pd-body">
                        <h1>{PostDetails.subject}</h1>
                        <img src="./images/laptopback.jpg" alt=""/>
                        <p>
                            {PostDetails.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    </>
  )
}

export default ProposalDetails