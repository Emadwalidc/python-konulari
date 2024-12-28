import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import VideoGallery from './components/VideoGallery.jsx';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <>
            <Header />
            <main>
              <CoreConcepts />
              <Examples />
            </main>
            <p id="video-text">Python videoları:</p>
            <VideoGallery/>
          </>
        } />
      </Routes>
    </Router>

    </>
  );
}

export default App;
