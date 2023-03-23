import React, { useEffect, useState } from 'react'
import AdminSidebar from '../AdminCommon/AdminSidebar'
import AdminTopbar from '../AdminCommon/AdminTopbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faEye, faL, faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import { fetchAllData } from './UsersService';
import DataLoadLoader from '../AdminCommon/DataLoadLoader';

const AllUsers = () => {

  
  const navigate = useNavigate();
  const [isDataLoading, setisDataLoading] = useState(true);

  const [usersList, setusersList] = useState([]);


// ---------- FETCH DATA 

  async function fetchData() {
    const myData = await fetchAllData();
    setusersList(myData.data)
    console.log(myData.data)
    setisDataLoading(false)
  }

  // ------------- USE EFFECT 

  useEffect(() => {
    fetchData();
    Aos.init({ duration: 2000 })
  }, []);



  return (
    <section className="main_content dashboard_part large_header_bg">

        <AdminSidebar/>
        <AdminTopbar/>

        
          <div className='container'>
              <div className='row mt-2'>
                <div className='col-md-6'>
                  <h5 className='admin-window-title' >Users</h5>
                </div>
                <div className='col-md-6 text-right pr-5'>
                </div>
              </div>
          </div>

          <div className='admin-content-cont'>

          <h6 className="dt-indicator">{usersList.length} users are availabe </h6>

          {isDataLoading && <DataLoadLoader />}


          <table data-aos="fade-up" className='admin-dt-datatable'>
            <thead>
              <tr>
                <th></th>
                <th>Status</th>
                <th>Name</th>
                <th>Email</th>
                <th>CNIC</th>
                <th>City</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
                usersList.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td><img className='table-admin-prof-img' src={item.profileImagePath}/></td>
                      <td>
                        {
                          item.isUserLocked && <span className='admin-table-user-status-da'>inactive</span>
                        }
                        {
                          !item.isUserLocked && <span className='admin-table-user-status-a'>active</span>
                        }
                        
                      </td>
                      <td>{item.firstName+" "+item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.cnic}</td>
                      <td>{item.residenceCity}</td>
                      <td>
                        <button className='admin-dt-btn' ><FontAwesomeIcon icon={faEye} /></button>
                        <button className='admin-dt-btn'><FontAwesomeIcon icon={faCog} /></button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>

        </div>


          

    </section>
  )
}

export default AllUsers