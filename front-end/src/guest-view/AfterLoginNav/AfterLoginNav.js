import React from 'react'
import './AfterLoginNav.css';

const AfterLoginNav = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark after-login-nav">
                <a className="navbar-brand" href="#">Investiganza</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Messages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Analytics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Community</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item dropdown ">

                            <a className="nav-link btn-nav-profile-img" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="images/c7.jpg" alt="" />
                                <div className="online-dot-indicator"></div>
                            </a>
                            <div className="dropdown-menu subnav-dropdown-login" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">View Profile</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Logout</a>
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