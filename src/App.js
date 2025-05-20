import { useEffect, useState } from 'react';

import Activity from './sections/Activity';
import Footer from './sections/Footer';
import ProfileBio from './sections/ProfileBio';
import Navbar from './sections/Navbar';
import Portfolio from './sections/Portfolio';
import Testimonial from './sections/Testimonial';

import './App.css';
import Features from './sections/Features';
import Brands from './sections/Brands';
import RecentWork from './sections/RecentWork';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [pageError, setPageError] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    setIsLoading(true);
    try {
      const response = await fetch(process.env.PUBLIC_URL+'/data/profile.json');
      if( !response.ok ) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const profile = await response.json();
      setProfileData(profile);
      setIsLoading(false);
    }
    catch(error) {
      console.error("Error fetching profile data:", error);
      setIsLoading(false);
      setPageError('Error fetching profile data.');
    }
  }
  
  if( isLoading || pageError ) {
    return <Spinner />
  }

  return (
    <>
      <Navbar />
      <ProfileBio profile={profileData} />
      <RecentWork gallery={profileData.recentWork} />
      <Features features={profileData.features} />
      <Brands />
      <Portfolio portfolio={profileData.portfolio} />
      <Activity />
      <Testimonial />
      <Footer />
    </>
  );
}

function Spinner() {
  return (
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default App;
