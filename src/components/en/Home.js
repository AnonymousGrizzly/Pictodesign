import React from 'react';
import '../../App.css';
import Herosection from '../HeroSection';
import Cards from '../Card';
import ContactForm from "../ContactForm";
import Footer from '../Footer';


function Home() {
  return (
      <>
        <Herosection/>
        <Cards />
        <ContactForm/>
        <Footer/>
      </>
  )
}

export default Home;