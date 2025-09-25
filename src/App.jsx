import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import Fondo from "/images/background/fondo2.jpeg"
import { Footer } from "./components/Footer/Footer"
import { Category } from "./components/Category/Category"
import { WarrantyPolicy } from "./components/WarrantyPolicy/WarrantyPolicy"
import { AboutUs } from "./components/AboutUs/AboutUs"
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy"
import { TermsAndConditions } from "./components/TermsAndConditions/TermsAndConditions"
import { Layout } from "./components/Layout/Layout"
import { ScrollToTop } from "./utils/ScrollToTop"
import { Catalogo } from "./components/Catalogo/Catalogo"
import { NotFound } from "./components/NotFound/NotFound"

function App() {
  // Estado para el modal de contacto en la página principal
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: 'relative'
  }

  return (
    <Router>
      <ScrollToTop /> {/* 👈 aquí */}
      <Routes>
        {/* Ruta principal */}
        <Route
          path="/" element={
            <>
              <div
                style={bgImagen}
                className="overflow-hidden min-h-screen relative">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10">
                  <Navbar isContactModalOpen={isContactModalOpen} toggleContactModal={toggleContactModal} />
                  <Hero />
                </div>
              </div>
              <Category />
              <Footer toggleContactModal={toggleContactModal} />
            </>
          }
        />

        {/* Layout general */}
        <Route element={<Layout />}>
          <Route path="/warranty-policy" element={<WarrantyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/catalogo" element={<Navigate to="/catalogo/caballero/ofertas" replace />} />
          <Route path="/catalogo/:categoria" element={<Catalogo />} />
          <Route path="/catalogo/:categoria/:subcategoria" element={<Catalogo />} />
        </Route>

        {/* Ruta 404 - debe ir al final */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App
