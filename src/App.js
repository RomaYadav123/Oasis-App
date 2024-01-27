import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import WelcomeScreen from "./container/Welcome/WelcomeScreen";
import Header from "./components/Header/Header.js";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
