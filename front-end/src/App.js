import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/js/bootstrap';
import Head from './guest-view/Home/Head';
import About from './guest-view/Home/About';
import Footer from './guest-view/Home/Footer';
import Counter from './guest-view/Home/Counter';
import Clients from './guest-view/Home/Clients';
import Subscribe from './guest-view/Home/Subscribe';
import Services from './guest-view/Home/Services';

function App() {
  return (
    <div className="App">
      <Head/>
      <About/>
      <Services/>
      <Counter/>
      <Clients/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
