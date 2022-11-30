import React from 'react'
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav'
import './Message.css'

const Message = () => {
  return (
    
    <>
        <AfterLoginNav/>

        <div className='msg-gapper'></div>
        
        <div className="msg-main-container">

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 p-0">
                    <div className="msg-left-pane ">
                        <h4>Messages</h4>

                        <div className="msg-search-box">
                            <label>
                                <span><i className="fa fa-search"></i></span>
                                Search
                            </label>
                            <input type="text" placeholder="Enter Name"/>
                        </div>

                        <div className="msg-list-container">
                            <ul className="msg-list">
                                <li className="msg-list-item">
                                    <a href="#" className="msg-list-anch">
                                        <div className="msg-item-inner">
                                            <img src="./images/c3.jpg" alt=""/>
                                            <div className="pl-3 pr-3">
                                                <h6>Haider Imam Jafferi</h6>
                                                <p>Investor</p>
                                            </div>
                                            <span>09:26 PM</span>
                                        </div>
                                    </a>
                                </li>

                                

                                <li className="msg-list-item">
                                    <a href="#" className="msg-list-anch">
                                        <div className="msg-item-inner">
                                            <img src="./images/c3.jpg" alt=""/>
                                            <div className="pl-3 pr-3">
                                                <h6>Haider Imam Jafferi</h6>
                                                <p>Investor</p>
                                            </div>
                                            <span>09:26 PM</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="msg-list-item">
                                    <a href="#" className="msg-list-anch">
                                        <div className="msg-item-inner">
                                            <img src="./images/c3.jpg" alt=""/>
                                            <div className="pl-3 pr-3">
                                                <h6>Haider Imam Jafferi</h6>
                                                <p>Investor</p>
                                            </div>
                                            <span>09:26 PM</span>
                                        </div>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="col-md-9 p-0">
                    <div className="msg-right-pane">
                        <div className="msg-rt-pane-header">
                            <img src="./images/c3.jpg" alt=""/>
                            <div className="pl-3">
                                <h6>Haider Imam Jafferi</h6>
                                <span>12/10/2022</span>
                            </div>
                        </div>

                        <div className="msg-stream">


                            <div className="msg-rcvr">
                                <p className="msg-reciever-note">
                                    HEllo There
                                </p> 
                                <label className="msg-rcvr-time">08:00 PM</label>
                            </div>
                            <div className="msg-sndr">
                                <p className="msg-sender-note">
                                    HEllo There
                                </p>   
                                <label className="msg-sndr-time">08:00 PM</label>
                            </div>
                            <div className="msg-rcvr">
                                <p className="msg-reciever-note">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae, veniam culpa consequuntur qui cupiditate sapiente beatae perferendis reprehenderit amet?
                                </p> 
                                <label className="msg-rcvr-time">08:00 PM</label>
                            </div>
                            <div className="msg-sndr">
                                <p className="msg-sender-note">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti asperiores perspiciatis culpa laborum officia velit consequuntur dolores quia sunt molestiae?
                                </p>   
                                <label className="msg-sndr-time">08:00 PM</label>
                            </div>
                            <div className="msg-rcvr">
                                <p className="msg-reciever-note">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae, veniam culpa consequuntur qui cupiditate sapiente beatae perferendis reprehenderit amet?
                                </p> 
                                <label className="msg-rcvr-time">08:00 PM</label>
                            </div>
                            <div className="msg-sndr">
                                <p className="msg-sender-note">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti asperiores perspiciatis culpa laborum officia velit consequuntur dolores quia sunt molestiae?
                                </p>   
                                <label className="msg-sndr-time">08:00 PM</label>
                            </div>
                            <div className="msg-rcvr">
                                <p className="msg-reciever-note">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae, veniam culpa consequuntur qui cupiditate sapiente beatae perferendis reprehenderit amet?
                                </p> 
                                <label className="msg-rcvr-time">08:00 PM</label>
                            </div>
                            <div className="msg-sndr">
                                <p className="msg-sender-note">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti asperiores perspiciatis culpa laborum officia velit consequuntur dolores quia sunt molestiae?
                                </p>   
                                <label className="msg-sndr-time">08:00 PM</label>
                            </div>
                            <div className="msg-rcvr">
                                <p className="msg-reciever-note">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae, veniam culpa consequuntur qui cupiditate sapiente beatae perferendis reprehenderit amet?
                                </p> 
                                <label className="msg-rcvr-time">08:00 PM</label>
                            </div>
                            <div className="msg-sndr">
                                <p className="msg-sender-note">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti asperiores perspiciatis culpa laborum officia velit consequuntur dolores quia sunt molestiae?
                                </p>   
                                <label className="msg-sndr-time">08:00 PM</label>
                            </div>
                            <div className="msg-rcvr">
                                <p className="msg-reciever-note">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae, veniam culpa consequuntur qui cupiditate sapiente beatae perferendis reprehenderit amet?
                                </p> 
                                <label className="msg-rcvr-time">08:00 PM</label>
                            </div>
                            <div className="msg-sndr">
                                <p className="msg-sender-note">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti asperiores perspiciatis culpa laborum officia velit consequuntur dolores quia sunt molestiae?
                                </p>   
                                <label className="msg-sndr-time">08:00 PM</label>
                            </div>
                            


                        </div>

                        <div className="msg-footer">
                            <div className="msg-footer-inner">
                                <input type="text" placeholder="Add your message"/>
                            <button className="msg-atch-file">
                                <i className="fa fa-paperclip"></i>
                            </button>
                            <button className="msg-snd-msg">
                                Send
                                <i className="fa fa-paper-plane"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    </>

  )
}

export default Message