import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Navbar />

      {/* <Route path = "/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="contact">
        <Contact />
      </Route>

      <Route path="login">
        <Login />
      </Route>

      <Route path="signup">
        <Signup />
      </Route> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
