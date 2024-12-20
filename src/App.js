// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/landing'; // Adjust path as necessary
import Cartpage from './components/cartpage';
import Cart from './components/cart';
import Checkup from './components/checkup'; // Import the Checkup component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/checkup" element={<Checkup />} /> {/* Add route for Checkup */}
        <Route path="/" element={<Cartpage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;



// App.js

// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Payment from './components/payment';
// import Landing from './components/landing'; // Assuming you have a Landing component

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route path="/" exact component={Payment} />
//           <Route path="/landing" component={Landing} />
//           {/* Add more routes as needed */}
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Cartpage from "./components/cartpage";
// import Cart from "./components/cart";


// import React from 'react';
// import Checkup from './components/checkup';


// export default function App() {
//   return (
//     <div>
//       <Checkup/>
//     </div>
//   )
// }
