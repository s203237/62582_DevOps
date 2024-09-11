import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}

export default App;




//import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './App.css';
//import ProductPage from './ProductPage'; // Your ProductPage component

//function App() {
//  return (
  //    <Router>
    //    <div className="App">
      //    <Routes>
         //   {/* Define routes for each page */}

     //      <!-- <Route path="/product" element={<ProductPage />} />  -->//{/* Your Product Page */}

         //</Routes>
        //</div>
      //</Router>
  //);
//}

// export default App;
