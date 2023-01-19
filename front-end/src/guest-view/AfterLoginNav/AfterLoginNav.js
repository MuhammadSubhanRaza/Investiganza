import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProfileData } from '../../ReduxHub/index'
import { Link, useNavigate } from 'react-router-dom';
import './AfterLoginNav.css';

const AfterLoginNav = () => {

     // ------------- REDUX

    const dispatch = useDispatch();

    const myState = useSelector((state)=>state.SetTheProfileGlobal)
   
    const navigate = useNavigate()

    function onLogoutClick()
    {
        dispatch(setProfileData(null));
        navigate('/login')
    }


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark after-login-nav">
                <Link className="navbar-brand" to="/newsfeed">
                <img src='/images/logos/mainHalfWhite.png'/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/newsfeed" className="nav-link">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/messages" className="nav-link">Messages</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/myposts" className="nav-link">My Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/community" className="nav-link">Community</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/myproposals" className="nav-link">My Proposals</Link>
                        </li>
                        <li className="nav-item dropdown ">

                            <a className="nav-link btn-nav-profile-img" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={myState.profileImagePath} alt="" />
                                <div className="online-dot-indicator"></div>
                            </a>
                            <div className="dropdown-menu subnav-dropdown-login" aria-labelledby="navbarDropdownMenuLink">
                                <p className='afterlogin_user_title'>{myState.firstName+" "+myState.lastName} </p>
                                <Link to="/profiledetails" className='dropdown-item a-nav-s-item'>View Profile</Link>
                                <Link to="/createpost" className='dropdown-item a-nav-s-item'>Create New Post</Link>
                                {/* <Link to="/" className='dropdown-item'>Logout</Link> */}
                                <button className='dropdown-item a-nav-s-item' onClick={()=>onLogoutClick()}>Logout</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>


            <section className="sub-category-nav">
                {/* <ul>
                    <li><a href="#">Food Business</a></li>
                    <li><a href="#">State Agency Business</a></li>
                    <li><a href="#">IT Business</a></li>
                    <li><a href="#">Auto Mobile Business</a></li>
                    <li><a href="#">New Startups</a></li>
                </ul> */}
            </section>

        </>
    )
}

export default AfterLoginNav