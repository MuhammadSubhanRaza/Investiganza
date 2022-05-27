import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from "react-bootstrap";
import Leftside from "./Leftside";
import Rightside from "./Rightside"



import 'bootstrap/dist/css/bootstrap.min.css';

const Login=()=>{
    return(
        <>

     <Container>
        <head>INVESTIGANZA</head>
     
     <div>
   
</div>
<Row>
     
    <Col className="col-md-6">
<Leftside></Leftside>
    </Col>

    
   <Col className="col-md-6"> <Rightside></Rightside></Col>
 
</Row>
    
     
     </Container>
 
     
   
        
        </>
      
    )
    
}

export default Login