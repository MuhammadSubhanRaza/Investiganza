import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Footer from '../Common/Footer';
import Navigation from '../Common/Navigation';
import './ProfileCreate.css';

const ProfileCreate = () => {
  return (
    <>
    
    <Navigation/>

    <div className='profilecreate-header'>

    </div>

    <section class="profile-create-sec">
        <div class="container">
            <div class="row">
                <div class="col-md-5 p-5">
                    <div class="create-profile-left-sec">
                        <h1 className='createprofile-title'>Complete Your Profile</h1>
                        <img src="images/c_p_img.jpeg" class="c-f-img" alt=""/>
                        <br/>
                        <button><span><i class="fa fa-upload"></i></span> Upload Profile Image</button>
                        <div class="cp-r-header mt-4">Personal Information</div>
                        <label for="" class="mt-3">CNIC</label>
                        <input type="text" placeholder="Enter Your CNIC here"/>
                        
                        <label for="">Address</label>
                        <textarea cols="30" rows="2" placeholder="Enter Your Address"></textarea>

                        <label for="">Date of Birth</label>
                        <input type="date"/>

                        <label for="">About You</label>
                        <textarea name="" placeholder="Enter Some Description" id="" cols="30" rows="3"></textarea>

                        <div class="mt-3 mb-4">
                            <input type="checkbox"/>
                            <span>I am Currently doing job</span>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-6 p-5">
                    <div class="create-profile-right-sec">

                            <div class="cp-r-header mt-3">Qualification</div>
                            
                            <label for="" class="mt-3">Last Degree</label>

                            <select>
                                <option value="-1">-- Select </option>
                                <option value="0">Matriculation</option>
                                <option value="1">Intermediate</option>
                                <option value="2">Graduation</option>
                                <option value="3">Master</option>
                            </select>

                            <label for="" class="mt-3">Other Qualification</label>
                            <input type="text" placeholder="Please Enter Other Qualification if any"/>


                            <div class="cp-r-header mt-4">Interest</div>
                            
                            <label for="" class="mt-3">Type of Business interest</label>

                            <div class="row mt-2">
                                <div class="col-sm-6">
                                    <input type="checkbox"/><span class="cp-r-interst-chk">Food</span>
                                    <br/>
                                    <input type="checkbox"/><span class="cp-r-interst-chk">Auto Mobile</span>
                                    <br/>
                                    <input type="checkbox"/><span class="cp-r-interst-chk">IT</span>
                                    <br/>
                                </div>
                                <div class="col-sm-6">
                                    <input type="checkbox"/><span class="cp-r-interst-chk">Electronics</span>
                                    <br/>
                                    <input type="checkbox"/><span class="cp-r-interst-chk">Buy and Sell</span>
                                    <br/>
                                    <input type="checkbox"/><span class="cp-r-interst-chk">Others</span>
                                </div>
                            </div>

                            <div class="cp-r-header mt-3">Terms and Policies</div>

                            <ul class="mt-3">
                                <li>Investiganza has all the rights to block if information is wrong</li>
                                <li>Legal action can be taken against you in case of fraud</li>
                                <li>In case of complains, you will face consequences</li>
                            </ul>

                            <input type="checkbox" class="mt-3"/>
                            <span>I accept all the terms and conditions</span>

                            <br/>
                            <input type="checkbox"/>
                            <span>I pledge that all the given information is correct
                            </span>

                            <div>
                                <button className='btn-cp-add'><FontAwesomeIcon icon={faPlus}/> Create</button>
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <Footer/>

    </>
  )
}

export default ProfileCreate