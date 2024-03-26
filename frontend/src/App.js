// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Alert from "./components/Alert";

// Redux
import { Provider  } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column ">
       
          <Header />
          <Alert />
          <Routes>
           
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Landing />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      </Provider>
    </>
  );
}

export default App;
