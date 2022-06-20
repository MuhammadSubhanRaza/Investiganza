import React from 'react'
import { faChartArea, faEye, faHandshake, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CommunityCard = () => {
    return (
        <div className='col-md-4'>
            <div className='community-card'>
                <img src='images/c5.jpg' />
                <h6>Financer / Investor</h6>
                <h5>Arham Khan</h5>
                <p>
                    Hey there I am Muhammad Arham Khan. I am the one who seeks the business for the investments so that i can later have a good margin
                </p>

                <a className='community-card-icon' href='#'>
                    <FontAwesomeIcon icon={faEye} />
                </a>
                <a className='community-card-icon' href='#'>
                    <FontAwesomeIcon icon={faChartArea} />
                </a>
                <a className='community-card-icon' href='#'>
                    <FontAwesomeIcon icon={faHandshake} />
                </a>
            </div>
        </div>
    )
}

export default CommunityCard