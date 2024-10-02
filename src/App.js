import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import HeroSection from './Components/HeroSection/HeroSection';
import BookPreview from './Components/BookPreview/BookPreview';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs';
import CardGrid from './Components/CardGrid/CardGrid';
import LoginRegister from './Pages/LoginRegister';
import ForgotPassword from './Pages/ForgotPassword';
import AdminDashb from './Components/AdminDashb/AdminDashb';
import LibraryInvent from './Components/AdminDashb/LibraryInvent';
import Cat from './Pages/Cat';
import ProtectedRoute from './Components/ProtectedRoute';
import Axios from "axios";
import Booklist from './Components/Booklist';
import LibraryDetail from './Pages/LibraryDetail';
import Sections from './Pages/Sections';
import InvestigativeBooks from './Pages/InvestigativeBooks';
import LeisureBooks from './Pages/LeisureBooks';
import BarcodeScanner from './Components/BarcodeScanner';

function App() {
  const [loading, setLoading] = useState(true);
  // Tus estados aquí...

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <BrowserRouter>
          <Navbar />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<><HeroSection /><BookPreview /><CardGrid /></>} />
              <Route path="/quienes_somos" element={<AboutUs />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/register" element={<LoginRegister />} />
              <Route path="/books" element={<Booklist />} />
              <Route path="/library/:id" element={<LibraryDetail />} />
              <Route path="/" element={<Sections />} />
              <Route path="/investigativo" element={<InvestigativeBooks />} />
              <Route path="/ocio" element={<LeisureBooks />} />
              <Route path="/catalogo" element={<Cat />} />
              <Route path="/admin" element={<AdminDashb />} />
              <Route path="/inventario" element={<LibraryInvent />} />
              <Route path="/scanner" element={<BarcodeScanner />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
