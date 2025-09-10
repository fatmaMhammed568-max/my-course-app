import React, { useState } from "react";
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
import Dashboard from "./pages/Dashboard.jsx";
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course/:slug" element={<CourseDetails />} />
          <Route path="/reservation/:slug" element={<Reservation />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
