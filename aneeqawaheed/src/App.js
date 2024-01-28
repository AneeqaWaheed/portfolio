import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
   <>
   <Navbar />
   <Home text="Aneeqa Waheed's Portfolio " delay={100} />
   </>
  );
}

export default App;
