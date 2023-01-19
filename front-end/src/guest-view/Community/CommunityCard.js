import React from 'react'
import { faChartArea, faEye, faHandshake, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const CommunityCard = (props) => {
    
    const profile = props.profile


    const navigate = useNavigate()


    // --------------------- PAGE NAVIGATION

    function loadProfileDetails(id)
    {
        navigate('/profiledetails/'+id)
    }



    return (
        <div className='col-md-4'>
            <div className='community-card'>
                <img src={profile.profileImagePath} />
                <h6>Financer / Investor</h6>
                <h5>{profile.firstName+" "+profile.lastName}</h5>
                <p>
                    {profile.about}
                </p>

                {/* <a className='community-card-icon' href='#'>
                    <FontAwesomeIcon icon={faEye} />
                </a>
                <a className='community-card-icon' href='#'>
                    <FontAwesomeIcon icon={faChartArea} />
                </a>
                <a className='community-card-icon' href='#'>
                    <FontAwesomeIcon icon={faHandshake} />
                </a> */}
                <button className='community-card-icon' onClick={()=>loadProfileDetails(profile.id)} >View Profile</button>
            </div>
        </div>
    )
}

export default CommunityCard