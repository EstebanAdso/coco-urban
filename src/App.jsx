import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import Fondo from "./assets/background/fondo2.jpeg"
import { Footer } from "./components/Footer/Footer"
import { Category } from "./components/Category/Category"
import { WarrantyPolicy } from "./components/WarrantyPolicy/WarrantyPolicy"
import { AboutUs } from "./components/AboutUs/AboutUs"
import { Layout } from "./components/Layout/Layout"
import { ScrollToTop } from "./utils/ScrollToTop"

function App() {

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
                  <Navbar />
                  <Hero />
                </div>
              </div>
              <Category />
              <Footer />
            </>
          }
        />

        {/* Layout general */}
        <Route element={<Layout />}>
          <Route path="/warranty-policy" element={<WarrantyPolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App
