import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import packages from './data/Packages';
import Footer from './components/Footer';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import destinations from './data/destinations';
import PackageDetails from './pages/PackageDetails';
import BookingPage from './pages/BookingPage';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home packages={packages} />} />
          <Route
            path="/destinations"
            element={<Destinations destinations={destinations} />}
          />
          <Route path="/packages" element={<Packages packages={packages} />} />
          <Route
            path="/booking/:id"
            element={<BookingPage packages={packages} />}
          />

          <Route
            path="/packages/:id"
            element={<PackageDetails packages={packages} />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App