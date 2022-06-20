import { faChartArea, faEye, faHandshake, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CommunityCard from './CommunityCard'
import './Community.css';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Footer from '../Common/Footer';

const Community = () => {
    return (
        <>
            <AfterLoginNav/>
            <section className='community-sec-main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='community-page-header'>
                                <h3>People You May Know</h3>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faMagnifyingGlass}/> Search</button>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Search by Name" aria-label="" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <CommunityCard/>
                        <CommunityCard/>
                        <CommunityCard/>
                        <CommunityCard/>
                        <CommunityCard/>
                    </div>
                </div>
            </section>

<Footer/>
        </>
    )
}

export default Community