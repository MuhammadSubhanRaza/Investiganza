import { faL, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Footer from '../Common/Footer';
import './CreatePost.css';
import { fetchAllCategories, saveRecord } from './CreatePostService';
import { useFormik } from 'formik';
import { createPostSchema } from '../../schemas/createPostSchema' 
import { useNavigate } from 'react-router-dom';
import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';

const CreatePost = (props) => {



    
  let navigate = useNavigate();

    const [categoriesList, setcategoriesList] = useState([]);
    const [isDataSaving, setisDataSaving] = useState(false);
    const [uploadedDocumentName, setuploadedDocumentName] = useState("Choose File");
    const [imagesToSet, setimagesToSet] = useState([]);
    const [isImageUploading, setisImageUploading] = useState(false);


    // -------------------- REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal)


    // ------------------ FORM VALIDATION ----------
  
    const initialValues = {
        document:"",
        images:[],
        subject:"",
        description:"",
        amount:"",
        categoryId:-1,
        userId:""
    }


    const {values,errors,touched,handleBlur,handleChange,setFieldValue,handleSubmit,setValues,resetForm} = useFormik({
        initialValues : initialValues,
        validationSchema : createPostSchema,
        onSubmit:(values)=>{
            handleRecordInsert()
            // console.log(values)
        }
        });



        async function handleRecordInsert()
        {
            setisDataSaving(true)
            let formData = formDataConversion()
            const isActionSuccessful = await saveRecord(formData)
            setTimeout(() => {
            if(isActionSuccessful)
            {
                resetForm()
                setisDataSaving(false)
                navigate('/newsfeed')
            }else{
            props.notificationFailure()
            setisDataSaving(false)
            }
            }, 2000);
        }


    // ------------------------ FORM DATA CONVERSION

    function formDataConversion()
    {
        let formData = new FormData();
        formData.append("subject",values.subject)
        formData.append("description",values.description)
        formData.append("categoryId",values.categoryId)
        formData.append("amount",values.amount)
        formData.append("document",values.document)
        // formData.append("images",values.images)
        formData.append("userId",myState.id)

        for (var i=0; i< values.images.length; i++)
        {
            formData.append("images",values.images[0])
        }

        return formData
    }


    // -------------------- FILE HANDLINGS


    function uploadDocument(events)
    {
        if(events.target.files && events.target.files[0])
        {
            let files = events.target.files;
            let reader = new FileReader();
            let res = reader.readAsDataURL(files[0]);
            reader.onload = (e) =>{
                setFieldValue('document',events.target.files[0]);
                setuploadedDocumentName(events.target.files[0].name)
            }
        }
        else{
            setFieldValue('document',null);
        }
    }

    function uploadImages(events)
    {
        setisImageUploading(true)
        setTimeout(() => {
            setFieldValue('images',events.target.files)
            let files = events.target.files

            const selectedFiles = []

            const targetFilesObject = [...files]

            targetFilesObject.map((file)=>{
                return selectedFiles.push(URL.createObjectURL(file))
            })

            setisImageUploading(false)
            setimagesToSet(selectedFiles);
        }, 2000);
        
    }


    // ---------------- FETCH DATA

    async function fetchCategories()
    {
        const myData = await fetchAllCategories()
        setcategoriesList(myData.data);
    }

    // ------------ USE EFFECT

    useEffect(() => {
        fetchCategories()
        
    }, [imagesToSet]);

    return (
        <>

            <AfterLoginNav />

            <section className='createpost-sec-main'>
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-md-12 pt-4'>
                                <h4>Create New Post</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='create-post-left'>
                                        <label>Subject</label>
                                        <input name='subject' type="text" 
                                        placeholder='Enter the Subject or Title' 
                                        value={values.subject} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                        {
                                            errors.subject && touched.subject ? (
                                                <label className='admin-form-error'>{errors.subject}</label>
                                            ) : null
                                        }
                                        
                                        <label>Type Of Business</label>
                                        <select name='categoryId'
                                        value={values.categoryId} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        >
                                            <option value="-1">Select</option>
                                            {
                                                categoriesList.map((item)=>{
                                                    return (
                                                        <option key={item.id} value={item.id}>{item.name}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                        {
                                            errors.categoryId && touched.categoryId ? (
                                                <label className='admin-form-error'>{errors.categoryId}</label>
                                            ) : null
                                        }

                                        <label>Amount Required</label>
                                        <input type="number" name='amount' 
                                        placeholder='Enter the Amount Required' 
                                        value={values.amount} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                        {
                                            errors.amount && touched.amount ? (
                                                <label className='admin-form-error'>{errors.amount}</label>
                                            ) : null
                                        }

                                        <label>Description</label>
                                        <textarea rows="5" name="description" 
                                        placeholder='Enter a briefe description about your project'
                                        value={values.description} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        ></textarea>
                                        {
                                            errors.description && touched.description ? (
                                                <label className='admin-form-error'>{errors.description}</label>
                                            ) : null
                                        }
                                    
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='create-post-right'>
                                <label className='mt-3'>Upload any Document</label>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Upload</span>
                                        </div>
                                        <div className="custom-file">
                                            <input onChange={(e)=>uploadDocument(e)} name='document' type="file" className="custom-file-input" id="inputGroupFile01" />
                                            <label className="custom-file-label">{uploadedDocumentName}</label>
                                        </div>
                                    </div>
                                    <label>Upload Images</label>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Upload</span>
                                        </div>
                                        <div className="custom-file">
                                            <input onChange={(e)=>uploadImages(e)} name='images' multiple accept="image/*" type="file" className="custom-file-input" id="inputGroupFile01" />
                                            <label className="custom-file-label">Choose file</label>
                                        </div>
                                    </div>
                                    {isImageUploading &&
                                        <div className='text-center'>
                                            <p className='mb-2'>Uploading Images...</p>
                                            <div style={{width:'100%',height:'4px'}} className='p-s-progress'></div>
                                        </div>
                                    }
                                    {
                                        imagesToSet.map((item,index)=>{
                                            return <a href={item}>
                                                <img key={index} src={item} />
                                            </a>
                                        })
                                    }
                                    {/* <img src='images/resturant.jpg' />
                                    <img src='images/resturant2.jpg' className='ml-3'/> */}

                                    <div className='mt-4'>

                                    
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                        <div className='row create-post-right'>
                            <div className='col-md-3 pl-5'>
                                <button type='submit'><FontAwesomeIcon icon={faPlus}/> Create Post</button>
                            </div>
                            <div className='col-md-3 pr-3'>
                                <button type='button' onClick={resetForm}><FontAwesomeIcon icon={faTimes}/> Cancel Post</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {isDataSaving &&
                <div className='profile-saving-loader'>
                    <div>
                        {/* <div className='profile-save-spinner '></div> */}
                        <div className='p-s-progress'></div>
                        <p>Please wait! Your post is being created</p>
                    </div>
                </div>
            }


        </>
    )
}

export default CreatePost