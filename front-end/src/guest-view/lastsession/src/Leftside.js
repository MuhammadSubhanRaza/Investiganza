import React from 'react'
import { Image } from 'react-bootstrap'
import { Container,Row,Col,Button } from "react-bootstrap";
import { useState } from 'react';
import './index.css';
const Leftside = () => {

  

  
  
  return (
    <div>
  
        <Container>
            <Row>
            
            <Col className='col-md-10'>
            <Image style={{ marginTop:"160px"}} src="logo2.png"></Image>
         
    
    
    <form>
                            <div className="form-group">
                                <label className="form-control-label">USERNAME</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD</label>
                                <input type="password" className="form-control" i/>
                            </div>

                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                 
                                </div>
                              
                                <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Remember Me</label>
    </div>
                            </div>

                        
   
      
    
    
    <div>
    <div 
    className="text-center pt-1 mb-5 pb-1">
                    <button 
                           style={{
          backgroundColor: "white",
         
        
          borderRadius: "30px",
                  marginLeft:"30px",
                  width:"200px",
      
        }} 
              
                    className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 buttset" type="button">Log
                      in</button>
                      <button 
                      style={{
          backgroundColor: "white",
         Color:"blue",
          borderColor:'#541cff',
          borderRadius: "30px",
                  marginLeft:"30px",
                  width:"200px",
      
        }} 
                      className="btn btn-primary  btn-block fa-lg gradient-custom-2 mb-3 " type="button">Create Account
                      </button>
             
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Forgotten your Login details?<b><a style={{color:"black"}} href="h!">Get help Signing In</a> </b> </p>
               
                  </div>

    </div>
   
  </form>
            </Col>

            </Row>
        </Container>
        </div>
   
  )
}

export default Leftside