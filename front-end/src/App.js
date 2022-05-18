import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/js/bootstrap';
import Head from './guest-view/Head';
import Footer from './guest-view/Footer';
import About from './guest-view/About';

function App() {
  return (
    <div className="App">
      <Head/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
