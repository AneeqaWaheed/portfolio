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
    <Route exact path="/contact" element={<ContactForm />} />
    
   </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
