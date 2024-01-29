import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
   <>
   <Navbar />
   <Home text="Aneeqa Waheed's Portfolio " delay={100} />
   <About />
   <Projects />
   </>
  );
}

export default App;
