import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from "../Header";
import Home from '../../pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
