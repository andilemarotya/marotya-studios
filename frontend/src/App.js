import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Terms from "./pages/Terms";




const App = () => {
  
  return (
    <Router>
      <NavBar/>

      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/services" element={<Services/>} />

        <Route path="/about" element={<About/>} />
         
        <Route path="/contact" element={<Contact/>} />

        <Route path="/terms" element={<Terms/>} />

      </Routes>
      </main>

      <Footer/>
    </Router>
  );
}

export default App;
