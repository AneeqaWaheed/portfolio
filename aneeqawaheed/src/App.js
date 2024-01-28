import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
   <>
   <Navbar />
   <Home text="Aneeqa Waheed's Portfolio " delay={100} />
   <About />
   </>
  );
}

export default App;
