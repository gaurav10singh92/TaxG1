import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Feedback from "./components/Feedback/Feedback";
import Login from "../src/pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Login></Login>
      <Contact />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
