import logo from './logo.svg';
import './App.css';
import Home from './Home'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
