import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import { setProfileData } from '../../ReduxHub/index'

const ProfileNavigation = () => {

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
    <nav className="navbar navbar-expand-lg navbar-dark after-login-nav">
    <Link className="navbar-brand" to="/newsfeed">
    <img src='/images/logos/mainHalfWhite.png'/>
    </Link>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <button onClick={()=>onLogoutClick()} className="nav-link btn ">Logout</button>
            </li>
            
            
        </ul>
    </div>
</nav>
  )
}

export default ProfileNavigation