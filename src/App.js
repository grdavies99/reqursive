import React from 'react';
import './App.css';
import BGImageContainer from './BGImageContainer';
import Header from './Header';
import About from './About';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';





function App() {
  const displayAction = false;
  return(
    <Router>
    <div className="container">
      <Header />
      {displayAction && <p></p>}
      <Routes>
        <Route path="/" element={<BGImageContainer/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App;
