import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Header from './components/header/Header';


function App() {
  return (
    <Router>
      <Header/>
          <Routes>       
              <Route  path="/"  element={<Home/>} />
              <Route  path="/contact" element={<Contact/>} />
              <Route  path="/about" element={<About/>} />
              <Route  path="/donate" element={<Donate/>} />
          </Routes>
  

    </Router>
  );
}

export default App;
