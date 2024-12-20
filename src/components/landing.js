import React from 'react';
import Navbar from './Navbar';
import Main from './main';
import Home from './Home';
import Cartpage from './cartpage';
import Cart from './cart'
import Footer from './footer'; // Corrected import name

export function Landing() {
  return (
    <div>
      <Navbar /> {/* Navbar component */}
      <Home />   {/* Home component */}
      <Main />   {/* Main component */} 
      
      <Cartpage/>
      
      <Footer /> {/* Footer component */}
    </div>
  );
}

export default Landing; // Exporting the Landing component as default

