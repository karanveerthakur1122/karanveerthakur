import './App.css';
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import MenuBar from './component/reactFile/MenuBar';
function App() {
  return (
    <Router>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
