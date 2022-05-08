import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Training from './pages/Training';


function App() {
  return (
    <Router >
          <Routes>       
              <Route  path="/"  element={<><Header/><Home/></>} />
              <Route  path="/contact" element={<><Header/><Contact/></>} />
              <Route  path="/about" element={<><Header/><About/> </> }/>
              <Route  path="/donate" element={<><Header/><Donate/></> } />
              <Route  path="/training" element={<Training/> } />
          </Routes>
      <Footer/>  

    </Router>
  );
}

export default App;
