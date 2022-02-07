import React from 'react';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



 function App() {

  return <Router>
    <nav>
      <Link to='/' className='link'>Shop</Link>
      <Link to='/about' className='link'>About</Link>
      <Link to='/contactus' className='link'>Contact Us</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contactus' element={<ContactUs/>} />
    </Routes>
  </Router>

}

export default App;




