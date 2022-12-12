import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Footer from '../Common/Footer';
import './CreatePost.css';

const CreatePost = () => {
    return (
        <>

            <AfterLoginNav />

            <section className='createpost-sec-main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 pt-4'>
                            <h4>Create New Post</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='create-post-left'>
                                <form>
                                    <label>Subject</label>
                                    <input type="text" placeholder='Enter the Subject or Title' />

                                    <label>Amount Required</label>
                                    <input type="text" placeholder='Enter the Amount Required' />

                                    <label>Description</label>
                                    <textarea rows="5" placeholder='Enter a briefe description about your project'></textarea>
                                </form>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='create-post-right'>
                                <label>Upload Images</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Upload</span>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile01" />
                                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                                <img src='images/resturant.jpg' />
                                <img src='images/resturant2.jpg' className='ml-3'/>

                                <div className='mt-4'>

                                
                                </div>

                                
                            </div>
                        </div>
                    </div>
                    <div className='row create-post-right'>
                        <div className='col-md-3 pl-5'>
                            <button><FontAwesomeIcon icon={faPlus}/> Create Post</button>
                        </div>
                        <div className='col-md-3 pr-3'>
                            <button><FontAwesomeIcon icon={faTimes}/> Cancel Post</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default CreatePost