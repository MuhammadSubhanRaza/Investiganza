import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Footer from '../Common/Footer';
import Navigation from '../Common/Navigation';
import './ProfileCreate.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { profileSchema } from '../../schemas/profileSchema';

const ProfileCreate = () => {

    
  // ------------------ INITIALIZERS ----------

    const{profileid} = useParams();
    let navigate = useNavigate();

    const [isUpdate, setisUpdate] = useState(false);
    const [isDataSaving, setisDataSaving] = useState(false);

    // ------------------ FORM VALIDATION ----------
  
  const initialValues = {
    profileImagePath:"",
    cNIC:"",
    address:"",
    provinceResidence:-1,
    residenceCityId:-1,
    about:"",
    degree:"",
    otherQualification:"",
    occupationId:-1,
    otherOccupation:"",
    categoryId:-1,
    userId:""
  }

  const {values,errors,touched,handleBlur,handleChange,handleSubmit,setValues,resetForm} = useFormik({
    initialValues : initialValues,
    validationSchema : profileSchema,
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
    
  }

  async function handleRecordUpdate()
  {
    
  }



  return (
    <>
    
    <Navigation/>

    <section className="sec-profile">

        <div className='profile-header'>
            </div>

    <form onSubmit={handleSubmit}>
            <div className="profile-fragment p-f-1">
                <h6 className="profile-fragment-title">Profile Information</h6>
                <p className="profile-fragment-subtitle">Update your account's profile information</p>


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <label className="profile-label" for="">CNIC</label>
                            <input className="profile-control" type="text"
                            name='cNIC'
                            />

                            <label className="profile-label" for="">Address</label>
                            <textarea rows={2} className="profile-control"
                            name='address'
                            ></textarea>

                            <label className="profile-label" for="">Province</label>
                            <select className="profile-control"
                            name='provinceResidence'
                            >
                                <option value="-1">Select</option>
                                <option value="0">Sindh</option>
                                <option value="1">Punjab</option>
                                <option value="2">Khyber Pakhtun</option>
                                <option value="3">Balochistan</option>
                            </select>

                            <label className="profile-label" for="">City</label>
                            <select className="profile-control"
                            name='residenceCityId'
                            >
                                <option value="-1">Select</option>
                                <option value="0">Sindh</option>
                                <option value="1">Punjab</option>
                                <option value="2">Khyber Pakhtun</option>
                                <option value="3">Balochistan</option>
                            </select>

                            <label className="profile-label" for="">About You</label>
                            <textarea rows={4} className="profile-control"
                            name='about'
                            ></textarea>
                        </div>
                        <div className="col-md-3 offset-md-1 text-center profile-img-main-holdr">
                            <img className="profile-set-img" src="./images/c3.jpg" />
                            <input type="file" className="form-control"
                            name='profileImagePath'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-fragment p-f-1">
                <h6 className="profile-fragment-title">Educational Information</h6>
                <p className="profile-fragment-subtitle">Update your educational information</p>


                <label className="profile-label" for="">Last Degree Achieved</label>
                <select className="profile-control"
                name='degree'
                >
                    <option value="-1">Select</option>
                    <option value="0">Ph.d</option>
                    <option value="1">Masters</option>
                    <option value="2">Bachelors</option>
                    <option value="3">Intermediate</option>
                    <option value="4">Matriculation</option>
                </select>

                <label className="profile-label" for="">Other Qualification</label>
                <input type="text" className="profile-control"
                name='otherQualification'
                />
            </div>

            <div className="profile-fragment p-f-1">
                <h6 className="profile-fragment-title">Occupational Information</h6>
                <p className="profile-fragment-subtitle">Update your occupational information</p>


                <label className="profile-label" for="">Current Occupation</label>
                <select className="profile-control"
                name='occupationId'
                >
                    <option value="-1">Select</option>
                    <option value="0">Ph.d</option>
                    <option value="1">Masters</option>
                    <option value="2">Bachelors</option>
                    <option value="3">Intermediate</option>
                    <option value="4">Matriculation</option>
                </select>


                <label className="profile-label" for="">Others</label>
                <input className="profile-control" type="text" 
                name='otherOccupation'
                />

               
            </div>

            <div className="profile-fragment p-f-1">
                <h6 className="profile-fragment-title">Business Interest</h6>
                <p className="profile-fragment-subtitle">Update your occupational information</p>


                <label className="profile-label" for="">Business Categories</label>
                <select className="profile-control"
                name='categoryId'
                >
                    <option value="-1">Select</option>
                    <option value="0">Ph.d</option>
                    <option value="1">Masters</option>
                    <option value="2">Bachelors</option>
                    <option value="3">Intermediate</option>
                    <option value="4">Matriculation</option>
                </select>
            </div>

            <div className="profile-fragment p-f-1">
                <h6 className="profile-fragment-title">Terms and Conditions</h6>
                <p className="profile-fragment-subtitle">Acceptance of our terms and policies</p>

                <p className="profile-term">Investiganza has all the rights to block a user permenantly from the system if any information given proved wrong</p>
                <p className="profile-term">Legal actions can be taken in case of any fraud or malicious activity</p>
                <p className="profile-term">In case of any complain, user will have to face consequences</p>
                
               <div className="mt-5 text-right">
                <button className="profile-logout">
                    Logout
                </button>
                <button className="profile-submit">
                    Submit Profile
                </button>
               </div>
                
            </div>
            </form>

        </section>
    
    <Footer/>

    </>
  )
}

export default ProfileCreate