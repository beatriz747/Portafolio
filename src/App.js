import './App.css';
import Activity from './sections/Activity';
import Footer from './sections/Footer';
import HomeBanner from './sections/HomeBanner';
import InfoCard from './sections/InfoCard';
import Navbar from './sections/Navbar';
import Portfolio from './sections/Portfolio';
import Testimonial from './sections/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <InfoCard />
      <Portfolio />
      <Activity />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
