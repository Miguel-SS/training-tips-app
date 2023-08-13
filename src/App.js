import './App.css';
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe'
import Footer from './Components/Footer'
import ContactMe from './Components/ContactMe';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <AboutMe/>
      <Services />
      <ContactMe />
      <Footer/>
    </div>
  );
}

export default App;
