
import React, { useEffect,useState } from 'react'
import './adminSidebar.css';
import './../../adminAssets/css/bootstrap1.min.css';
import './../../adminAssets/css/style1.css';
import './../../adminAssets/css/metisMenu.css';
import './../../adminAssets/vendors/themefy_icon/themify-icons.css';
import './../../adminAssets/vendors/niceselect/css/nice-select.css';
import './../../adminAssets/vendors/scroll/scrollable.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



const AdminSidebar = () => {
    
useEffect(() => {
    const script = document.createElement('script');
    script.src = "/admin/js/jquery1-3.4.1.min.js";
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src = "/admin/js/popper1.min.js";
    script2.async = true;
    script2.type = 'text/javascript';
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = "/admin/js/bootstrap1.min.js";
    script3.async = true;
    script3.type = 'text/javascript';
    document.body.appendChild(script3);
    
    const script4 = document.createElement('script');
    script4.src = "/admin/js/metisMenu.js";
    script4.async = true;
    script4.type = 'text/javascript';
    document.body.appendChild(script4);

    const script5 = document.createElement('script');
    script5.src = "/admin/js/dashboard_init.js";
    script5.async = true;
    script5.type = 'text/javascript';
    document.body.appendChild(script5);

    const script6 = document.createElement('script');
    script6.src = "/admin/js/custom.js";
    script6.async = true;
    script6.type = 'text/javascript';
    document.body.appendChild(script6);
    
  return () => {
    document.body.removeChild(script);
    document.body.removeChild(script2);
    document.body.removeChild(script3);
    document.body.removeChild(script4);
    document.body.removeChild(script5);
    document.body.removeChild(script6);
    }
  }, []);

  
const [isSmallNavOpen, setIsSmallNavOpen] = useState("sidebar dark_sidebar");


  const openSmallNav = () =>{
    if(isSmallNavOpen == 'sidebar dark_sidebar')
    {
        setIsSmallNavOpen('sidebar dark_sidebar new-small-nav');
    }else{
        setIsSmallNavOpen('sidebar dark_sidebar');
    }
  }


  return (
    <>
        <nav className={isSmallNavOpen}>
        
            <button onClick={()=>openSmallNav()} className='cls-btn-f-nav'><FontAwesomeIcon icon={faBars}/></button>
            <div className="logo d-flex justify-content-between">
                <a className="large_logo"  href="index.html">
                    <img src="/images/Logos/mainHalfWhite.png" className='admin-main-logo-image' alt=""/></a>
                <a className="small_logo" href="index.html"><img src="img/mini_logo.png" alt=""/></a>
                <div className="sidebar_close_icon d-lg-none">
                    {/* <i  className="ti-close"></i> */}
                </div>
            </div>
            <ul id="sidebar_menu">
            <li className="">
                    <Link to="/admin/dashboard" className='admin-sidebar-a' aria-expanded="false">
                        <div className="nav_icon_small">
                            <img src="img/menu-icon/2.svg" alt=""/>
                        </div>
                        <div className="nav_title">
                            <span>Dashboard</span>
                        </div>
                    </Link>
                </li>
                <li className="admin-sidebar-li">
                    <a className="has-arrow admin-sidebar-a" href="#" aria-expanded="false">
                        <div className="nav_icon_small">
                            <img src="img/menu-icon/1.svg" alt=""/>
                        </div>
                        <div className="nav_title">
                            <span>Categories</span>
                        </div>
                    </a>
                    <ul>
                        <li><Link to="/admin/categories">Show all</Link></li>
                        <li><Link to="/admin/addcategory">Add New</Link></li>
                    </ul>
                </li>
                <li className="">
                    <a href="crypto_wallet.html" className='admin-sidebar-a' aria-expanded="false">
                        <div className="nav_icon_small">
                            <img src="img/menu-icon/2.svg" alt=""/>
                        </div>
                        <div className="nav_title">
                            <span>Crypto Wallet</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default AdminSidebar

