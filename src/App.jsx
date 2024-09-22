import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import NavBar from './NavBar';
import './App.css';

const App = () => {
  return (
    <div className='font-robot'>
    
        <NavBar />
        <HeroSection />
        <FeatureSection />
     
    </div>
  );
}

export default App;
