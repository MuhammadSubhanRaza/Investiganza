import React, { useEffect, useState } from 'react'
import './Category.css';
import AdminSidebar from '../AdminCommon/AdminSidebar'
import AdminTopbar from '../AdminCommon/AdminTopbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faL, faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import DataLoadLoader from '../AdminCommon/DataLoadLoader';
import { deleteData, fetchAllData } from './CategoryService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckForServiceAvailablity } from '../Services/CheckIfServiceDown';

const Category = (props) => {

  const navigate = useNavigate();
  const [isDataLoading, setisDataLoading] = useState(true);
  const [isDataSaving, setisDataSaving] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);


  const [idToDelete, setidToDelete] = useState(0);

  const [categoriesList, setCategoriesList] = useState([]);

  function handleModelOpen(id) {
    setisModalOpen(true)
    setidToDelete(id)
  }

  async function fetchData() {
    const myData = await fetchAllData();
    setCategoriesList(myData.data)
    setisDataLoading(false)
  }

  function loadEdit(id)
  {
    navigate('/admin/editcategory/'+id)
  }

  

  useEffect(() => {
    console.log(navigator.onLine)
    fetchData();
    Aos.init({ duration: 2000 })
  }, []);



  async function deleteRecord() {
    setisDataSaving(true)
    const isActionSuccessful = await deleteData(idToDelete)

    setTimeout(() => {
      if (isActionSuccessful) {
        setisDataSaving(false)
        props.notificationDelete()
        let records = categoriesList.filter(record => record.id != idToDelete)
        setCategoriesList(records)
      } else {
        props.notificationFailure()
        setisDataSaving(false)
      }
      setisModalOpen(false)
    }, 2000);
  }



  return (
    <>

      <section className="main_content dashboard_part large_header_bg">

        <AdminSidebar />
        <AdminTopbar />


<div className='container'>
    <div className='row mt-2'>
      <div className='col-md-6'>
        <h5 className='admin-window-title' >Categories</h5>
      </div>
      <div className='col-md-6 text-right pr-5'>
      <Link className='admin-btn-add-new' to="/admin/addcategory">
            <FontAwesomeIcon icon={faPlus} /> Add New Record
          </Link>
      </div>
    </div>
</div>

        

       

        <div className='admin-content-cont'>

          <h6 className="dt-indicator">{categoriesList.length} categories are availabe </h6>

          {isDataLoading && <DataLoadLoader />}


          <table data-aos="fade-up" className='admin-dt-datatable'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                categoriesList.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>
                        <button onClick={()=>loadEdit(item.id)} className='admin-dt-btn' ><FontAwesomeIcon icon={faPencil} /></button>
                        <button onClick={() => handleModelOpen(item.id)} data-toggle="modal" data-target="#exampleModalCenter" type='button' className='admin-dt-btn'><FontAwesomeIcon icon={faTrash} /></button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>

        </div>

        {/* MODAL */}
        
        {isModalOpen &&
        <div className="adminCustomModalCenter" >
          <div className="modal-dialog modal-dialog-centered" data-aos="zoom-in" role="document">
            <div className="modal-content">
              <div className="modal-header admin-delete-modal-header">
                <button type="button" className="close" onClick={()=>setisModalOpen(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body admin-delete-modal-body">
                <span className='modal-check-mark'>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <h1>Do you really want to delete this record?</h1>
                <p>
                  Do you really want to delete this contact? This process can not be undone
                </p>
              </div>
              <div className="admin-delete-modal-footer">
                <button type="button" onClick={() => deleteRecord()} className="btn admin-modal-btn-save">
                  {isDataSaving && <div className='dt-save-spinner'></div>}
                  {isDataSaving && " deleting record ..."}
                  {!isDataSaving && "Delete"}
                </button>
                <button type="button" className="btn admin-modal-btn-cancel" onClick={()=>setisModalOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>

        }

        <ToastContainer />
      </section>

    </>
  )
}

export default Category