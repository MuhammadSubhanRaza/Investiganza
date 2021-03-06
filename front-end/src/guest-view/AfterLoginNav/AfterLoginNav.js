import React from 'react'
import { Link } from 'react-router-dom';
import './AfterLoginNav.css';

const AfterLoginNav = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark after-login-nav">
                <Link className="navbar-brand" to="/newsfeed">Investiganza</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/messages" className="nav-link">Messages</Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link to="" className="nav-link">Success Stories</Link> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/community" className="nav-link">Community</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create-profile" className="nav-link">Settings</Link>
                        </li>
                        <li className="nav-item dropdown ">

                            <a className="nav-link btn-nav-profile-img" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="images/c7.jpg" alt="" />
                                <div className="online-dot-indicator"></div>
                            </a>
                            <div className="dropdown-menu subnav-dropdown-login" aria-labelledby="navbarDropdownMenuLink">
                                <Link to="" className='dropdown-item'>View Profile</Link>
                                <Link to="/createpost" className='dropdown-item'>Create New Post</Link>
                                <Link to="/" className='dropdown-item'>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>


            <section className="sub-category-nav">
                <ul>
                    <li><a href="#">Food Business</a></li>
                    <li><a href="#">State Agency Business</a></li>
                    <li><a href="#">IT Business</a></li>
                    <li><a href="#">Auto Mobile Business</a></li>
                    <li><a href="#">New Startups</a></li>
                </ul>
            </section>

        </>
    )
}

export default AfterLoginNav