import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import './App.css';

const App = () => {
  return (
    <div className='container font-robot flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl flex flex-col justify-center items-center border-red-500 border'>
        <HeroSection />
        <FeatureSection />
      </div>
    </div>
  );
}

export default App;
