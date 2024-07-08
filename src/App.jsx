import React from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Protfolio from './components/Protfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import ContactUs from './components/ContactUs ';

function App() {
  return (
    <>
    <div>
    <NavBar />
    <Home />
    <About />
    <Protfolio />
    <Experience />
    <ContactUs />
    <Footer />
    </div>
    <Toaster />
    </>
  );
}

export default App
