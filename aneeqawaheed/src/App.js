import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
   <>
   <Navbar />
   <Home text="Aneeqa Waheed's Portfolio " delay={100} />
   <About />
   <Projects />
   <Footer />
   </>
  );
}

export default App;
