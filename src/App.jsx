import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import VideoGallery from './components/VideoGallery.jsx';
import SignUp from './components/SignUp.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Footer from './components/Footer.jsx';
import AboutPython from './components/AboutPython.jsx';
import AboutMe from './components/AboutMe.jsx';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/" element={
          <>
            <Header />
            <AboutPython />
            <main>
              <CoreConcepts />
              <Examples />
            </main>
            <p id="video-text">Python videoları:</p>
            <VideoGallery/>
          </>
        } />
      </Routes>
      <Footer />
    </Router>

    </>
  );
}

export default App;
