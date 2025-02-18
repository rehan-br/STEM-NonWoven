import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}> {/* ✅ Fix GitHub Pages Routing */}
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} /> {/* ✅ No need for leading `/` */}
            <Route path="products" element={<Products />} />
            <Route path="benefits" element={<Benefits />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
