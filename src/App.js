import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BGImageContainer from './BGImageContainer';
import Header from './Header';
import About from './About';
import Product from './Product';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';






function App() {
  return(
    <Router>
      <Header />
    <div className="my-container">
      
      <Routes>
        <Route path="/" element={<BGImageContainer/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/suport" element={<About/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App;
