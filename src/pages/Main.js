import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import Technologies from '../Components/Technologies';
import Proficiency from '../Components/Proficiency';
import ContactForm from '../Components/Contact';
function Main() {
  return (
    <div className="landing-page ">
     <Navbar />
   <Home text="Aneeqa Portfolio " delay={100} />
   <Technologies/>
   <Proficiency />
   <About />
   <Projects />
   <ContactForm />
   <Footer />
     
    </div>
  );
}

export default Main;
