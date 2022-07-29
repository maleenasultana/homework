import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import CardSection from "./CardSection";
import AppSection from './AppSection';


function App() {
  return (
    <div className='app'>

      <Navbar />
      <Hero />
      <CardSection /> 
      <AppSection />
      <Footer />
    </div>
  );
}

export default App;
