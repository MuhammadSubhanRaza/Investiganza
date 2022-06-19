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
      <UnderReview/>
    </div>
  );
}

export default App;
