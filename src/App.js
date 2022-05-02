import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Portfolio/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
