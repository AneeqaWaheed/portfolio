import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import ContactForm from './Components/Contact';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Main />} />
    
   </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
