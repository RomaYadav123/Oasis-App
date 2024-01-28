import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import WelcomeScreen from "./container/Welcome/WelcomeScreen";
import Header from "./components/Header/Header.js";
import { Col, Container, Row } from "react-bootstrap";
import RegisterScreen from "./container/Register/RegisterScreen.js";
import ProfileScreen from "./components/Profile/ProfileScreen.js";
import Country from "./components/Country/Country.js";
import ProfileSubScreen from "./components/Profile/ProfileSubScreen.js";
import PhoneNumberScreen from "./components/PhoneNumber/PhoneNumber.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/header" element={<Header />} />

        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/profilesub" element={<ProfileSubScreen />} />

      </Routes>
    </Router>
  );
}

export default App;
