import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProfileData } from '../../ReduxHub/index'
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {


    //------------------- INITIALIZERS  

    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [isAdmin, setisAdmin] = useState(false);

    // ------------- REDUX

    const dispatch = useDispatch();

    const myState = useSelector((state)=>state.SetTheProfileGlobal)

    
    const navigate = useNavigate()

    function onLogoutClick()
    {
        setisLoggedIn(false)
        dispatch(setProfileData(null));
        navigate('/')
        
    }


    function checkIfIsLoggedIn()
    {
        if(myState == null)
        {
            setisLoggedIn(false)
        }
        else{
            setisLoggedIn(true)
        }
    }


    // ------------------------ USE EFFECT

    useEffect(() => {
        checkIfIsLoggedIn()
    }, []);



    // ------------------- NAVIGATION CLASS HANDLER

    const [navClass,setNavClass] = useState("navbar navbar-expand-lg navbar-dark cst-inactive-nav");

    const changeBackground = () =>{
        if(window.scrollY>80)
        {
            setNavClass("navbar navbar-expand-lg navbar-dark cst-active-nav")
        }
        else
        {
            setNavClass("navbar navbar-expand-lg navbar-dark cst-inactive-nav")
        }
    }

    window.addEventListener('scroll',changeBackground)

    return (
        <nav className={navClass}>
            <a className="navbar-brand" href="#"><img src='images/logos/mainHalfWhite.png'/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item usual-nav-link">
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className="nav-item usual-nav-link">
                        <Link className='nav-link' to="/about">About</Link>
                    </li>
                    <li className="nav-item usual-nav-link">
                        <Link className='nav-link' to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item usual-nav-link">
                        <Link className='nav-link' to="/policies">Policies</Link>
                    </li>
                    
                    {
                        !isLoggedIn &&
                        <>
                            <li className="nav-item nav-link-login">
                                <Link className='nav-link' to="/login">Login</Link>
                            </li>
                            <li className="nav-item nav-link-register">
                                <Link className='nav-link' to="/signup">Register</Link>
                            </li>
                        </>
                    }
                    
                    {
                        isLoggedIn && 
                        <>
                            <li className="nav-item usual-nav-link">
                                <Link className='nav-link' to="/newsfeed">Dashboard</Link>
                            </li>
                            <li className="nav-item nav-link-register">
                                <button style={{background:'transparent',border:'none',fontSize:'1rem'}} className='nav-link' onClick={()=>onLogoutClick()}>Logout</button>
                            </li>
                        </>
                    }
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navigation