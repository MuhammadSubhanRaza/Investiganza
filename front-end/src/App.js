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
import {BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Navigation from './guest-view/Common/Navigation';
import Community from './guest-view/Community/Community';
// import Home from './guest-view/Dark/Home';

function App() {
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
      {/* <CreatePost/> */}

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/create-profile' element={<ProfileCreate/>}/>
          <Route path='/underreview' element={<UnderReview/>}/>
          <Route path='/newsfeed' element={<NewsFeed/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='*' element={<Error400/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
