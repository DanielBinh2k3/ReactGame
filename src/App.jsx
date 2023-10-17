import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import Main from './component/Main';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Define additional routes here */}
      </Routes>
    </Router>
  );
}

export default App;
