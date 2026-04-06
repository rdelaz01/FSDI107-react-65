import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />


      <Routes>
        <Route path='/about' element= {<About />} />
        <Route path='/catalog' element= {<Catalog/> } />
        <Route path= '/' element= {<Home />} />
        <Route path= '/contact' element= {<Contact/>} /> 
        <Route path= '/admin' element={<Admin/>} />
        <Route path= '*' element= {<NotFound/>} />
      </Routes>
      
      
      
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
