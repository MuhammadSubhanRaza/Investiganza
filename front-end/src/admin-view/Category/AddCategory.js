import React,{useState,useEffect} from 'react'
import AdminSidebar from '../AdminCommon/AdminSidebar'
import AdminTopbar from '../AdminCommon/AdminTopbar'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link,useNavigate, useParams } from 'react-router-dom';
import {saveData,fetchDetails,updateData} from './CategoryService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { categorySchema } from '../../schemas';
import { CheckForServiceAvailablity } from '../Services/CheckIfServiceDown';

const AddCategory = (props) => {

  const{catid} = useParams();
  let navigate = useNavigate();

  const [isUpdate, setisUpdate] = useState(false);
  const [isDataSaving, setisDataSaving] = useState(false);


  // ------------------ FORM VALIDATION ----------
  
  const initialValues = {
    name:"",
    description:""
  }

  const {values,errors,touched,handleBlur,handleChange,handleSubmit,setValues,resetForm} = useFormik({
    initialValues : initialValues,
    validationSchema : categorySchema,
    onSubmit:(values)=>{
      if(isUpdate)
      {
        handleRecordUpdate()
      }else{
        handleRecordInsert()
      }
    }
    });



  async function handleRecordInsert()
  {
    setisDataSaving(true)
    const isActionSuccessful = await saveData(values)
    setTimeout(() => {
    if(isActionSuccessful)
    {
        resetForm()
        setisDataSaving(false)
        props.notificationSave()
        navigate('/admin/categories')
    }else{
      props.notificationFailure()
      setisDataSaving(false)
    }
    }, 2000);
  }

  async function handleRecordUpdate()
  {
    setisDataSaving(true)
    const isActionSuccessful = await updateData(values)
    setTimeout(() => {
    if(isActionSuccessful)
    {
        resetForm()
        props.notificationUpdate()
        setisDataSaving(false)
        navigate('/admin/categories')
    }else{
      props.notificationFailure()
      setisDataSaving(false)
    }
    }, 2000);
  }


  async function loadRecordDetails(id)
  {
    const dataToUpdate = await fetchDetails(id)
    setValues(dataToUpdate)
  }

  useEffect(()=>{
    if(!CheckForServiceAvailablity())
    {
      navigate("/servicedown")
    }
    if(catid!=undefined)
    {
      setisUpdate(true)
      loadRecordDetails(catid)
    }
    Aos.init({duration:2000})
},[]);



  return (
    <section className="main_content dashboard_part large_header_bg">

        <AdminSidebar/>
        <AdminTopbar/>


        <h5 className='admin-window-title'>Add New Category</h5>

        <div className='admin-content-cont' data-aos="fade-up">


          <Link to="/admin/categories">Show All Records</Link>

           <div className='container mt-4'>
            <div className='row'>
              <div className='col-md-10 offset-md-1'>
              <form className='admin-data-frm' onSubmit={handleSubmit}>
            
            <div className='cstm-admn-cntrl-cont'>
              <label className='admn-cstm-frm-lbl'>Name</label>
              <input name='name'  disabled={isDataSaving} placeholder='Enter Category Name' 
              value={values.name} 
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              className='admn-cstm-frm-cntrl'/>
               {
              errors.name && touched.name ? (
                <label className='admin-form-error'>{errors.name}</label>
              ) : null
            }
            </div>
            
           
            

            
            <div className='cstm-admn-cntrl-cont'>
              <label className='admn-cstm-frm-lbl'>Description</label>
              <input name='description' disabled={isDataSaving} placeholder='Enter Category Description' 
              value={values.description}
              onChange={handleChange} 
              autoComplete="off"
              onBlur={handleBlur}
              className='admn-cstm-frm-cntrl'/>
              {
                errors.description && touched.description ? (
                  <label className='admin-form-error'>{errors.description}</label>
                ) : null
              }
            </div>

            {!isUpdate &&
              <button type='submit' className='mt-3 admin-btn-save' >
                {isDataSaving && <div className='dt-save-spinner'></div>}
                {isDataSaving && " saving data ..."}
                {!isDataSaving && "Save"}
              </button>
            } 

            {isUpdate &&
              <button type='submit' className='mt-3 admin-btn-save'>
                {isDataSaving && <div className='dt-save-spinner'></div>}
                {isDataSaving && " updating data ..."}
                {!isDataSaving && "Update"}
              </button>
            }

            
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