import logo from './logo.svg';
import './App.css';
import Home from './Home'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <AboutMe/>
    </div>
  );
}

export default App;
