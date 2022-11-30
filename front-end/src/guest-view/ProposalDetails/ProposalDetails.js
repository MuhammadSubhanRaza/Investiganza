import React from 'react'
import './ProposalDetails.css'
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import {Link } from 'react-router-dom';


const ProposalDetails = () => {
  return (
    <>
    
    
      <AfterLoginNav/>

      <div className="postdetial-cont">
        <div className="pd-left-pane pl-4">
            <div className="pd-pane-header">
                <img src="./images/c3.jpg" alt=""/>
                <div>
                    <h6>Zeeshan Imran</h6>
                    <span>JULY 2, 2020</span>
                </div>
            </div>
            <div className="pd-amount-required">
                <span>Amount Required</span>
                <h6>Rs. 1,000,000</h6>
            </div>
           
            <div className="pd-pane-images">
                <h6 className="pane-title">IMAGES</h6>
                <a href="#">
                    <img src="./images/laptopback.jpg" alt=""/>
                </a>
                <a href="#">
                    <img src="./images/laptopback.jpg" alt=""/>
                </a>
                <a href="#">
                    <img src="./images/laptopback.jpg" alt=""/>
                </a>
                <a href="#">
                    <img src="./images/laptopback.jpg" alt=""/>
                </a>
                <a href="#">
                    <img src="./images/laptopback.jpg" alt=""/>
                </a>
                <a href="#">
                    <img src="./images/laptopback.jpg" alt=""/>
                </a>
                
            </div>
            <div className="pd-pane-attachments">
                <h6 className="pane-title">Attachments</h6>
                <a href="#">
                    <i className="fa fa-file"></i>
                    My Smaple Document
                </a>
                <a href="#">
                    <i className="fa fa-file"></i>
                    My Smaple Document
                </a>
            </div>

            <div className="pr-4">
                <Link to="/create-proposal" className="pd-send-proposal">Send Proposal</Link>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-5">
                    <div className="pd-body">
                        <h1>I want to start a software house</h1>
                        <img src="./images/laptopback.jpg" alt=""/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate et excepturi, fugiat pariatur nesciunt repudiandae aliquam sunt ducimus earum, corrupti veniam temporibus asperiores itaque, enim recusandae impedit. Neque harum similique nostrum. Commodi, ducimus ab. Minima iure atque explicabo laborum sed porro, perspiciatis nesciunt. Voluptates, nisi, eaque asperiores aliquid molestiae illo esse veniam blanditiis aliquam numquam inventore expedita obcaecati excepturi molestias cum deserunt culpa quidem earum maxime officiis, quos laudantium quaerat fuga. Explicabo, natus velit suscipit obcaecati sequi odio id ipsa nam iusto reiciendis ex iste magni totam ipsum. Eveniet asperiores quia vitae omnis explicabo dicta quis aperiam unde delectus?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti et illo impedit perspiciatis officiis eaque dignissimos dolore optio, error quis consectetur labore repudiandae, cupiditate, similique ipsa voluptatem assumenda laudantium. Voluptate doloribus pariatur nobis architecto corporis omnis laboriosam eaque provident temporibus. Quasi sapiente quis odit necessitatibus expedita iste. Vitae perspiciatis esse adipisci illo ex, et blanditiis optio magni obcaecati harum culpa repellendus ipsum quidem quis modi, necessitatibus voluptatibus tenetur sunt vero nisi? Alias voluptatem tenetur reprehenderit officiis sapiente, aspernatur consectetur vitae eos, odio ab facilis incidunt ratione aliquam perferendis. Quod minima itaque autem velit minus, laborum unde iste veritatis nemo?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    </>
  )
}

export default ProposalDetails