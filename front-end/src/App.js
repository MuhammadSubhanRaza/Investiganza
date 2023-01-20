import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/js/bootstrap';
import Home from './guest-view/Home/Home';
import About from './guest-view/About/About';
import Contact from './guest-view/Contact/Contact';
import Login from './guest-view/Login/Login';
import Signup from './guest-view/Signup/Signup';
import ProfileCreate from './guest-view/CreateProfile/ProfileCreate';
import Error400 from './guest-view/ErrorPages/Error400';
import Error500 from './guest-view/ErrorPages/Error500';
import UnderReview from './guest-view/ErrorPages/UnderReview';
import AfterLoginNav from './guest-view/AfterLoginNav/AfterLoginNav';
import NewsFeed from './guest-view/NewsFeed/NewsFeed';
import CreatePost from './guest-view/CreatePost/CreatePost';
import {BrowserRouter as Router, Route, Routes,Link,useNavigate } from 'react-router-dom';
import Navigation from './guest-view/Common/Navigation';
import Community from './guest-view/Community/Community';
import Policies from './guest-view/Policies/Policies';
import Message from './guest-view/Message/Message';
import CreateProposal from './guest-view/CreateProposal/CreateProposal';
import ProposalDetails from './guest-view/ProposalDetails/ProposalDetails';
import AllUsers from './admin-view/AllUsers/AllUsers';
import Category from './admin-view/Category/Category';
import AddCategory from './admin-view/Category/AddCategory';
import { createContext, useEffect, useState } from 'react';
import ServiceDown from './guest-view/ErrorPages/ServiceDown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataLayerContext } from './admin-view/Services/CustomGlobalStates';
import MyPosts from './guest-view/MyPosts/MyPosts';
import MyProposals from './guest-view/MyProposals/MyProposals';
import ProfileDetails from './guest-view/ProfileDetails/ProfileDetails';
import IsLoggedInService from './MainServiceComponents/IsLoggedInService';
import TemporarilyLocked from './guest-view/ErrorPages/TemporarilyLocked';
import UnauthorizedAcess from './guest-view/ErrorPages/UnauthorizedAcess';
import IsAdminService from './MainServiceComponents/IsAdminService';

function App() {



  
  // const FirstName = createContext();

 


  return (
    <div className="App">
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <ProfileCreate/> */}
      {/* <Error400/> */}
      {/* <Error500/> */}
      {/* <UnderReview/> */}
      {/* <AfterLoginNav/> */}
      {/* <NewsFeed/> */}

      <Router>
        <Routes>
          
          {/* <Route path='/create-profile' element={<ProfileCreate notificationFailure={notifyDataSaveFailure} notificationUpdate={notifyDataUpdated}/>}/> */}
          <Route path='/create-profile' element={<IsLoggedInService Component={ProfileCreate}/>}/>
          {/* <Route path='/newsfeed' element={<NewsFeed/>}/> */}
          <Route path='/newsfeed' element={<IsLoggedInService Component={NewsFeed}/>}/>
          {/* <Route path='/createpost' element={<CreatePost notificationFailure={notifyDataSaveFailure}  notificationSave={notifyDataSaved}/>}/> */}
          <Route path='/createpost' element={<IsLoggedInService Component={CreatePost}/>}/>
          {/* <Route path='/community' element={<Community/>}/> */}
          <Route path='/community' element={<IsLoggedInService Component={Community}/>}/>
          {/* <Route path='/create-proposal/:postid' element={<CreateProposal/>}/> */}
          <Route path='/create-proposal/:postid' element={<IsLoggedInService Component={CreateProposal}/>}/>
          {/* <Route path='/proposal-details/:postid' element={<ProposalDetails/>}/> */}
          <Route path='/proposal-details/:postid' element={<IsLoggedInService Component={ProposalDetails}/>}/>
          
          {/* <Route path='/myposts' element={<MyPosts/>}/> */}
          <Route path='/myposts' element={<IsLoggedInService Component={MyPosts}/>}/>
          <Route path='/myproposals' element={<IsLoggedInService Component={MyProposals}/>}/>
          <Route path='/profiledetails/:profid' element={<IsLoggedInService Component={ProfileDetails}/>}/>
          {/* <Route path='/myproposals' element={<MyProposals/>}/> */}
          {/* <Route path='/profiledetails/:profid' element={<ProfileDetails/>}/> */}

          <Route path='/teporarilylocked' element={<TemporarilyLocked/>}/>
          <Route path='/servicedown' element={<ServiceDown/>}/>
          <Route path='*' element={<Error400/>}/>
          <Route path='/unauthorized' element={<UnauthorizedAcess/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/underreview' element={<UnderReview/>}/>
          <Route path='/policies' element={<Policies/>}/>
          <Route path='/messages' element={<Message/>}/>


          {/* ----------- ADMIN ------------ */}

          <Route path='/admin/categories' element={<IsAdminService Component={Category}/>}/>
          <Route path='/admin/addcategory' element={<IsAdminService Component={AddCategory}/>} />
          <Route path='/admin/editcategory/:catid' element={<IsAdminService Component={AddCategory}/>} />

          {/* <Route path='/admin/allusers' element={<AllUsers/>} />
          <Route path='/admin/categories' element={<Category notificationFailure={notifyDataSaveFailure} notificationDelete={notifyDataDeleted}/>}/>
          <Route path='/admin/addcategory' element={<AddCategory notificationFailure={notifyDataSaveFailure}  notificationSave={notifyDataSaved}/>}/>
          <Route path='/admin/editcategory/:catid' element={<AddCategory notificationFailure={notifyDataSaveFailure} notificationUpdate={notifyDataUpdated}/>}/> */}

        </Routes>
      </Router>


      
      <ToastContainer/>
    </div>
  );
}

export default App;
