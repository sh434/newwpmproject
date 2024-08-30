// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import About from './pages/AboutView/AboutView';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<About />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
