// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div className="d-flex flex-column ">
          <Header />

          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Landing />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
