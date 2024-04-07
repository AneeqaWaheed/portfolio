import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import Technologies from '../Components/Technologies';
function Main() {
  return (
    <div className="landing-page ">
     <Navbar />
   <Home text="Aneeqa Portfolio " delay={100} />
   <Technologies/>
   <About />
   <Projects />
   <Footer />
     
    </div>
  );
}

export default Main;
