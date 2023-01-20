import React, { useEffect, useState } from 'react'
import './CreateProposal.css'
import Footer from '../Common/Footer';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { createProposalSchema } from '../../schemas/createProposal';
import { saveData } from './CreateProposalService';
import { useSelector } from 'react-redux';
import Aos from 'aos';
import "aos/dist/aos.css";

const CreateProposal = () => {

  
    // -------------------- REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal)
    
  
    // ---------------- GET PARAMS VALUE

    const{postid} = useParams();
    

    // ------------------ INITIALS

    const [isDataSaving, setisDataSaving] = useState(false);

    const navigate = useNavigate()


  // ------------------- FORM VALIDATION

    const initialValues = {
      amount:"",
      message:"",
      postId:0,
      userId:""
    }
  
    const {values,errors,touched,handleBlur,handleChange,setFieldValue,handleSubmit,setValues,resetForm} = useFormik({
      initialValues : initialValues,
      validationSchema : createProposalSchema,
      onSubmit:(values)=>{
        handleRecordInsert()
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
            navigate('/newsfeed')
        }else{
          setisDataSaving(false)
        }
        }, 2000);
      }

      // ------------------------- USEEFFECT

      useEffect(() => {
        setFieldValue("userId",myState.id)
        setFieldValue("postId",postid)
        Aos.init({duration:2000})
      }, []);


  return (
    <>
    
    <AfterLoginNav/>
      
      <div className="container">

   

    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <div className="create-proposal-cont"  data-aos="fade-up">
              {
                isDataSaving && <div className='create-prop-loader'></div>
              }
            
                <h3 className='mt-2'>Create Proposal</h3>
                <form onSubmit={handleSubmit}>
                    <input type="number" placeholder="Amount for Investment"
                    name='amount'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                    />
                    {
                      errors.amount && touched.amount ? (
                        <label className='admin-form-error'>{errors.amount}</label>
                      ) : null
                    }

                    <label className="mt-3">Message / Description</label>
                    <textarea rows="5"
                    name='message'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    ></textarea>

                    {
                      errors.message && touched.message ? (
                        <label className='admin-form-error'>{errors.message}</label>
                      ) : null
                    }

                    <button type="submit">
                        <i className="fa fa-paper-plane"></i> Submit Proposal
                    </button>
                </form>
            </div>
        </div>
    </div>
   </div>
   
   <Footer/>
    </>
  )
}

export default CreateProposal