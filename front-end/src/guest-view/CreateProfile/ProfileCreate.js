import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Footer from '../Common/Footer';
import Navigation from '../Common/Navigation';
import './ProfileCreate.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { profileSchema } from '../../schemas/profileSchema';
import { useSelector } from 'react-redux';
import { fetchCatgories, fetchCities, fetchOccupations,saveData } from './ProfileService';
import Aos from 'aos';
import "aos/dist/aos.css";

const ProfileCreate = (props) => {

    // ------------ REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal);
    
  // ------------------ INITIALIZERS ----------

    const{profileid} = useParams();
    let navigate = useNavigate();

    const defaultFormImage = "images/profileimageholder.png";
    const [formImage, setformImage] = useState(defaultFormImage);

    const [citiesList, setcitiesList] = useState([]);
    const [occupationsList, setoccupationsList] = useState([]);
    const [categoriesList, setcategoriesList] = useState([]);

    const [isUpdate, setisUpdate] = useState(false);
    const [isDataSaving, setisDataSaving] = useState(false);

    // ----------------- LOAD ALL DATA ------------

    async function loadCities() {
        const cities = await fetchCities()
        setcitiesList(cities.data)
    }
    async function loadOccupations() {
        const occupations = await fetchOccupations()
        setoccupationsList(occupations.data)
    }
    async function loadCategories() {
        const categories = await fetchCatgories()
        setcategoriesList(categories.data)
    }

    // ------------------ USE EFFECT ---------------

    useEffect(() => {
        loadCities()
        loadCategories()
        loadOccupations()
        Aos.init({ duration: 2000 })
    }, []);

    //-------------------- UPLOAD IMAGE ----------

    function uploadImage(events)
    {
        if(events.target.files && events.target.files[0])
        {
            let files = events.target.files;
            let reader = new FileReader();
            let res = reader.readAsDataURL(files[0]);
            reader.onload = (e) =>{
                setFieldValue('imageFile',events.target.files[0]);
                setformImage(e.target.result)
            }
        }
        else{
            setFieldValue('imageFile',null);
            setformImage(defaultFormImage);
        }
    }


    // ------------------ FORM VALIDATION ----------
  
  const initialValues = {
    profileImagePath:"",
    imageFile:"",
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
    userId:myState.userId
  }

  const {values,errors,touched,handleBlur,handleChange,handleSubmit,setFieldValue,setValues,resetForm} = useFormik({
    initialValues : initialValues,
    validationSchema : profileSchema,
    onSubmit:(values)=>{
      if(isUpdate)
      {
        handleRecordUpdate()
      }else{
        setisDataSaving(true)
        handleRecordInsert()
    
      }
    }
    });


    
  async function handleRecordInsert()
  {
    let formData = formDataConversion()
    const isActionSuccessful = await saveData(formData)
    setTimeout(() => {
    if(isActionSuccessful)
    {
        resetForm()
        setisDataSaving(false)
        navigate('/underreview');
    }else{
      props.notificationFailure()
      setisDataSaving(false)
    }
    }, 3000);
  }

  async function handleRecordUpdate()
  {
    
  }


  function formDataConversion()
  {
    let formData = new FormData()
    formData.append("profileImagePath",values.profileImagePath);
    formData.append("imageFile",values.imageFile);
    formData.append("cNIC",values.cNIC);
    formData.append("address",values.address);
    formData.append("provinceResidence",values.provinceResidence);
    formData.append("residenceCityId",values.residenceCityId);
    formData.append("about",values.about);
    formData.append("degree",values.degree);
    formData.append("otherQualification",values.otherQualification);
    formData.append("occupationId",values.occupationId);
    formData.append("otherOccupation",values.otherOccupation);
    formData.append("categoryId",values.categoryId);
    formData.append("userId",values.userId);
    return formData
  }



  return (
    <>
    
    <Navigation/>

    <section className="sec-profile">

        <div className='profile-header'>
            </div>

    <form onSubmit={handleSubmit}>
            <div className="profile-fragment p-f-1" data-aos="fade-up">
                <h6 className="profile-fragment-title">Profile Information</h6>
                <p className="profile-fragment-subtitle">Update your account's profile information</p>


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <input type="hidden" value={values.userId}/>
                            <label className="profile-label" >CNIC</label>
                            <input className="profile-control" type="text"
                            name='cNIC'
                            disabled={isDataSaving}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cNIC}
                            />
                            {
                                errors.cNIC && touched.cNIC ? (
                                    <label className='text-danger mt-1'>{errors.cNIC}</label>
                                ) : null
                            }

                            <label className="profile-label" >Address</label>
                            <textarea rows="2" className="profile-control"
                            name='address'
                            disabled={isDataSaving}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                            ></textarea>
                            {
                                errors.address && touched.address ? (
                                    <label className='text-danger mt-1'>{errors.address}</label>
                                ) : null
                            }

                            <label className="profile-label" >Province</label>
                            <select className="profile-control"
                            name='provinceResidence'
                            disabled={isDataSaving}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.provinceResidence}
                            >
                                <option value="-1">Select</option>
                                <option value="0">Sindh</option>
                                <option value="1">Punjab</option>
                                <option value="2">Khyber Pakhtun</option>
                                <option value="3">Balochistan</option>
                            </select>
                            {
                                errors.provinceResidence && touched.provinceResidence ? (
                                    <label className='text-danger mt-1'>{errors.provinceResidence}</label>
                                ) : null
                            }

                            <label className="profile-label">City</label>
                            <select className="profile-control"
                            name='residenceCityId'
                            disabled={isDataSaving}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.residenceCityId}
                            >
                                <option value="-1">Select</option>
                                {
                                    citiesList.map((item)=>{
                                        return (
                                            <option key={item.id} value={item.id}>{item.name}</option> 
                                        );
                                    })
                                }
                            </select>
                            {
                                errors.residenceCityId && touched.residenceCityId ? (
                                    <label className='text-danger mt-1'>{errors.residenceCityId}</label>
                                ) : null
                            }

                            <label className="profile-label" >About You</label>
                            <textarea rows={4} className="profile-control"
                            name='about'
                            disabled={isDataSaving}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.about}
                            ></textarea>
                            {
                                errors.about && touched.about ? (
                                    <label className='text-danger mt-1'>{errors.about}</label>
                                ) : null
                            }

                        </div>
                        <div className="col-md-3 offset-md-1 text-center profile-img-main-holdr">
                            <img className="profile-set-img" src={formImage} />
                            <input type="file" accept="image/*" className="form-control"
                            name='profileImagePath'
                            onChange={(e)=>uploadImage(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-fragment p-f-1" data-aos="fade-up">
                <h6 className="profile-fragment-title">Educational Information</h6>
                <p className="profile-fragment-subtitle">Update your educational information</p>


                <label className="profile-label" >Last Degree Achieved</label>
                <select className="profile-control"
                name='degree'
                disabled={isDataSaving}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.degree}
                >
                    <option value="-1">Select</option>
                    <option value="0">Ph.d</option>
                    <option value="1">Masters</option>
                    <option value="2">Bachelors</option>
                    <option value="3">Intermediate</option>
                    <option value="4">Matriculation</option>
                </select>
                {
                    errors.degree && touched.degree ? (
                        <label className='text-danger mt-1'>{errors.degree}</label>
                    ) : null
                }

                <label className="profile-label" >Other Qualification</label>
                <input type="text" className="profile-control"
                name='otherQualification'
                disabled={isDataSaving}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.otherQualification}
                />
            </div>

            <div className="profile-fragment p-f-1" data-aos="fade-up">
                <h6 className="profile-fragment-title">Occupational Information</h6>
                <p className="profile-fragment-subtitle">Update your occupational information</p>


                <label className="profile-label" >Current Occupation</label>
                <select className="profile-control"
                name='occupationId'
                disabled={isDataSaving}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.occupationId}
                >
                    <option value="-1">Select</option>
                    {
                        occupationsList.map((item)=>{
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option> 
                            );
                        })
                    }
                    {/* <option value="0">Ph.d</option>
                    <option value="1">Masters</option>
                    <option value="2">Bachelors</option>
                    <option value="3">Intermediate</option>
                    <option value="4">Matriculation</option> */}
                </select>
                {
                    errors.occupationId && touched.occupationId ? (
                        <label className='text-danger mt-1'>{errors.occupationId}</label>
                    ) : null
                }


                <label className="profile-label" >Others</label>
                <input className="profile-control" type="text" 
                name='otherOccupation'
                disabled={isDataSaving}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.otherOccupation}
                />

               
            </div>

            <div className="profile-fragment p-f-1" data-aos="fade-up">
                <h6 className="profile-fragment-title">Business Interest</h6>
                <p className="profile-fragment-subtitle">Update your occupational information</p>


                <label className="profile-label" >Business Categories</label>
                <select className="profile-control"
                name='categoryId'
                disabled={isDataSaving}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.categoryId}
                >
                    <option value="-1">Select</option>
                    {
                        categoriesList.map((item)=>{
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option> 
                            );
                        })
                    }
                    {/* <option value="0">Ph.d</option>
                    <option value="1">Masters</option>
                    <option value="2">Bachelors</option>
                    <option value="3">Intermediate</option>
                    <option value="4">Matriculation</option> */}
                </select>
                {
                    errors.categoryId && touched.categoryId ? (
                        <label className='text-danger mt-1'>{errors.categoryId}</label>
                    ) : null
                }
            </div>

            <div className="profile-fragment p-f-1" data-aos="fade-up">
                <h6 className="profile-fragment-title">Terms and Conditions</h6>
                <p className="profile-fragment-subtitle">Acceptance of our terms and policies</p>

                <p className="profile-term">Investiganza has all the rights to block a user permenantly from the system if any information given proved wrong</p>
                <p className="profile-term">Legal actions can be taken in case of any fraud or malicious activity</p>
                <p className="profile-term">In case of any complain, user will have to face consequences</p>
                
               <div className="mt-5 text-right">
                <button className="profile-logout">
                    Logout
                </button>
                <button type='submit' className="profile-submit">
                    Submit Profile
                </button>
               </div>
                
            </div>
            </form>

            {isDataSaving &&
                <div className='profile-saving-loader'>
                    <div>
                        {/* <div className='profile-save-spinner '></div> */}
                        <div className='p-s-progress'></div>
                        <p>please wait! while we are creating your profile</p>
                    </div>
                </div>
            }

        </section>
    
    <Footer/>

    </>
  )
}

export default ProfileCreate