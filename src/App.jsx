import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Reservation from "./pages/Reservation.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course/:slug" element={<CourseDetails />} />
          <Route path="/reservation/:slug" element={<Reservation />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
