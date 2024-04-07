import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
function Main() {
  return (
    <div className="landing-page ">
     <Navbar />
   <Home text="Aneeqa Portfolio " delay={100} />
   <About />
   <Projects />
   <Footer />
     
    </div>
  );
}

export default Main;
