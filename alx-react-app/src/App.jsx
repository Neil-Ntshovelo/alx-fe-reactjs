// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import './index.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile/UserProfile'




function App() {
  

  return (
    
    <>
      <WelcomeMessage />

      <Header />
    
      <MainContent />  
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Ntshovelo" age="23" bio=" I am a programmer who specialise in Front-end development and this is my React progress " />
      <Footer />
    
     
    </>
     
  );
}

export default App
