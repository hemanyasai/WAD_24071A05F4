import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Packages from './pages/Packages';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>@24071A05F4</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
