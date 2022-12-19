import React,{useState,useEffect} from 'react'
import AdminSidebar from '../AdminCommon/AdminSidebar'
import AdminTopbar from '../AdminCommon/AdminTopbar'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link,useNavigate } from 'react-router-dom';
import {saveData} from './CategoryService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {

  const apiUrl = "http://localhost:5070/api/categories";
  const initialState = {"name":'',"description":''}
  const [isDataSaving, setisDataSaving] = useState(false);

  const notifyDataSaved = () => toast.success("Success! data saved successfuly");
  const notifyDataSaveFailure = () => toast.error("Sorry! data save failure");

  let navigate = useNavigate();

  const [formData, setFormData] = useState({"name":'',"description":''});
  const [isDataValidated, setisDataValidated] = useState(true);

  
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  function handleForm()
  {
    setisDataSaving(true)
    setTimeout(() => {
      saveData(formData)
      resetForm()
      setisDataSaving(false)
      notifyDataSaved()
      // navigate('/admin/categories')
    }, 3000);
  }

  function resetForm()
  {
    setFormData(initialState)
  }

  function validateForm()
  {
    if(formData.name == ''){
      setNameError("*Name can not be null or empty")
      setisDataValidated(false)
    }
    if(formData.description == ''){
      setDescriptionError("*Description can not be null or empty")
      setisDataValidated(false)
    }
    return isDataValidated
  }

  useEffect(()=>{
    Aos.init({duration:2000})
},[]);


useEffect(()=>{
  setisDataValidated(false)
},[isDataValidated]);

  return (
    <section className="main_content dashboard_part large_header_bg">

        <AdminSidebar/>
        <AdminTopbar/>


        <h5 className='admin-window-title'>Add New Category</h5>

        <div className='admin-content-cont' data-aos="fade-up">


          <Link to="/admin/categories">Show All Records</Link>

           <div className='container'>
            <div className='row'>
              <div className='col-md-10 offset-md-1'>
              <form className='admin-data-frm'>
            
            <label className='mt-4'>Name</label>
            <input required disabled={isDataSaving} placeholder='Enter Category Name' value={formData.name} onChange={(e)=>{setFormData({...formData,"name":e.target.value})}} className='admn-cstm-frm-cntrl'/>
            <label className='admin-form-error'>{nameError}</label>

            <label className='mt-4'>Description</label>
            <input required disabled={isDataSaving} placeholder='Enter Category Description' value={formData.description} onChange={(e)=>{setFormData({...formData,"description":e.target.value})}} className='admn-cstm-frm-cntrl'/>
            <label className='admin-form-error'>{descriptionError}</label>

            <button type='button' className='mt-3 admin-btn-save' onClick={()=>handleForm()}>
              {isDataSaving && <div className='dt-save-spinner'></div>}
              {isDataSaving && " saving data ..."}
              {!isDataSaving && "Save"}
            </button>
            
            <button disabled={isDataSaving} type='button' className='mt-3 ml-3 admin-btn-cancel' onClick={()=>resetForm()}>Cancel</button>
        
        </form>    
              </div>
            </div>
            </div>        

        </div>

      <ToastContainer/>
    </section>
  )
}

export default AddCategory