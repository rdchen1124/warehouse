import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Header from "../Header";
import Navbar from "../Navbar";
import Home from '../../pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Row className="m-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Row>
      </Router>
    </div>
  );
}

export default App;
