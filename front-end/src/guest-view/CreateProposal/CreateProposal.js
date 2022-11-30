import React from 'react'
import './CreateProposal.css'
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';

const CreateProposal = () => {
  return (
    <>
    
    <AfterLoginNav/>
      
      <div className="container">
    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <div className="create-proposal-cont">
                <h3>Create Proposal</h3>
                <form action="">
                    <input type="text" placeholder="Amount for Investment"/>
                    <label for="" className="mt-3">Message / Description</label>
                    <textarea rows="5"></textarea>
                    <button type="submit">
                        <i className="fa fa-paper-plane"></i> Submit Proposal
                    </button>
                </form>
            </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default CreateProposal