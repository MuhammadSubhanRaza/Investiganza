import React, { useEffect, useState } from 'react'
import './ProfileDetails.css';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav'
import Footer from '../Common/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faMapMarker, faMessage, faPaperPlane, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useParams } from 'react-router-dom';
import { getProfile, postFeedback } from './ProfileDetailsService';
import { useSelector } from 'react-redux';


const ProfileDetails = () => {

    
    
    // -------------------- REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal)

    
    const{profid} = useParams();

    // ------------------- INITIALS

    const [isFeedbackModalOpen, setisFeedbackModalOpen] = useState(false);
    const [isMessageModalOpen, setisMessageModalOpen] = useState(false);
    const [profile, setprofile] = useState({});
    const [isDataLoading, setisDataLoading] = useState(true);

    const [Message, setMessage] = useState("");
    const [Feedback, setFeedback] = useState("");

    const [feedbackNotification, setfeedbackNotification] = useState(false);
    const [messageNotification, setmessageNotification] = useState(false);



    // -------------------- LOAD PROFILE


    async function loadProfile()
    {
        let data = await getProfile(profid)

        setTimeout(() => {
            setprofile(data)
            setisDataLoading(false)
            console.log(data)
        }, 2000);

        
    }


    // ------------------ BUTTON HANDLERS

    function openFeedbackModal()
    {
        setisFeedbackModalOpen(true)
    }
    function openMessageModal()
    {
        setisMessageModalOpen(true)
    }
    function closeFeedbackModal()
    {
        setisFeedbackModalOpen(false)
    }
    function closeMessageModal()
    {
        setisMessageModalOpen(false)
    }
    function closeNotificationFeedback()
    {
        setfeedbackNotification(false)
    }
    function closeNotificationMessage()
    {
        setfeedbackNotification(false)
    }


    // -------------------- SEND FEEDBACK and MESSAGE

    async function sendFeedback()
    {
        let obj = {
            "message":Feedback,
            "userId":myState.id,
            "profileId":profid
        }
        console.log(obj)
        let result = await postFeedback(obj)
        if(result)
        {
            setfeedbackNotification(true)
            closeFeedbackModal()
        }
    }


    async function sendMessage()
    {

    }


    // ------------------- USE EFFECT

    useEffect(() => {
        Aos.init({duration:2000})
        loadProfile()
    }, []);


  return (
    <>
    
    <AfterLoginNav/>
      
        <div className='prof-details'>

        {
            isDataLoading && 
            <>
                <p className='text-center mt-5'>Loading profile...</p>
                <div className='create-prop-loader'></div>
            </>
        }

        {
            !isDataLoading &&
        

            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={profile.profileImagePath}/>
                        <span className='prof-details-title mt-4'>ABOUT</span>
                        <div className='prof-det-divider'></div>
                        <p>
                            {profile.about}
                        </p>
                    </div>
                    <div className='col-md-9'>
                        <div className='prof-det-right'>
                            <div className='prof-det-right-header'>
                                <h6 className='prof-det-title'>{profile.firstName+" "+profile.lastName}</h6>
                                <span className='prof-det-subtitle'>Investor/Financer</span>
                                <br/>
                                <span>
                                    <FontAwesomeIcon icon={faMapMarker}/> {profile.residenceCity}
                                </span>
                                <span className='mt-4 d-block'>Ratings</span>
                                <span className='ratingstar'>
                                    <FontAwesomeIcon icon={faStar}/>
                                </span>
                                <span className='ratingstar'>
                                    <FontAwesomeIcon icon={faStar}/>
                                </span>
                                <span className='ratingstar'>
                                    <FontAwesomeIcon icon={faStar}/>
                                </span>
                                <span className='ratingstar'>
                                     <FontAwesomeIcon icon={faStar}/>
                                </span>
                                <span className='ratingstar'>
                                    <FontAwesomeIcon icon={faStar}/>
                                </span>
                            </div>
                            <div className='prof-det-btns-sec mt-4'>
                                <button onClick={()=>openMessageModal()} className='prof-det-btn'><FontAwesomeIcon icon={faMessage} className="mr-2"/> Send Message </button>
                                <button onClick={()=>openFeedbackModal()} className='prof-det-btn ml-2'><FontAwesomeIcon icon={faComment} className="mr-2"/> Send Feedback</button>
                            </div>
                            <div className='prof-det-pinfo'>
                                <span className='prof-details-title mt-4'>Contact</span>
                                <div className='prof-det-divider'></div>
                                <table className='w-100'>
                                    <tr>
                                        <th className='pt-2'>Email</th>
                                        <td>{profile.email}</td>
                                    </tr>
                                    <tr>
                                        <th className='pt-2'>Contact</th>
                                        <td>0312 7897898</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">  
                                            <span className='prof-details-title mt-4'>Occupational Information</span>
                                            <div className='prof-det-divider'></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='pt-2'>Occupation</th>
                                        <td>{profile.occupationName}</td>
                                    </tr>
                                    <tr>
                                        <th className='pt-2'>Other Occupation</th>
                                        <td>{profile.otherOccupation}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <span className='prof-details-title mt-4'>Educational Information</span>
                                            <div className='prof-det-divider'></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='pt-2'>Qualification</th>
                                        <td>BSSE</td>
                                    </tr>
                                    <tr>
                                        <th className='pt-2'>Other Qualification</th>
                                        <td>{profile.otherQualification}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}
        </div>

{
    isFeedbackModalOpen &&

        <div className='prof-send-feedback-cont' >
            <div className='prof-send-feedback-cont-center' data-aos="zoom-in">
                <h5>Post Feedback to {profile.firstName+" "+profile.lastName}</h5>
                    <label className='mt-5'>Enter Your Message</label>
                    <textarea value={Feedback} onChange={(e)=>setFeedback(e.target.value)}></textarea>
                    <button onClick={()=>sendFeedback()} className='prof-det-btn mt-4'>Send <FontAwesomeIcon icon={faPaperPlane}/></button>
                    <button onClick={()=>closeFeedbackModal()} className='prof-det-btn mt-4'>Close <FontAwesomeIcon icon={faTimes}/></button>
                
            </div>
        </div>
}

{
    isMessageModalOpen &&

        <div className='prof-send-feedback-cont' >
            <div className='prof-send-feedback-cont-center' data-aos="zoom-in">
                <h5>Send Message to {profile.firstName+" "+profile.lastName}</h5>
                    <label className='mt-5'>Enter Your Message</label>
                    <textarea value={Message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <button onClick={()=>sendMessage()} className='prof-det-btn mt-4'>Send <FontAwesomeIcon icon={faPaperPlane}/></button>
                    <button onClick={()=>closeMessageModal()} className='prof-det-btn mt-4'>Close <FontAwesomeIcon icon={faTimes}/></button>
                
            </div>
        </div>
}

{feedbackNotification && 

    <div className='message-notification-pd' data-aos="fade">
        <div className='container'>
            <div className='row'>
                <div className='col-md-10'>
                    <p>Feedback has been sent successfully</p>
                </div>
                <div className='col-md-2 text-right'>
                    <button onClick={()=>closeNotificationFeedback()}><FontAwesomeIcon icon={faTimes}/></button>
                </div>
            </div>
        </div>
    </div>
}

{messageNotification && 

<div className='message-notification-pd' data-aos="fade">
    <div className='container'>
        <div className='row'>
            <div className='col-md-10'>
                <p>Message has been sent successfully</p>
            </div>
            <div className='col-md-2 text-right'>
                <button onClick={()=>closeNotificationMessage()}><FontAwesomeIcon icon={faTimes}/></button>
            </div>
        </div>
    </div>
</div>
}
   
    <Footer/>
    </>
  )
}

export default ProfileDetails