import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import Fondo from "./assets/background/fondo2.jpeg"
import { Footer } from "./components/Footer/Footer"

function App() {

  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: 'relative'
  }

  return (
    <>
      <div style={bgImagen} className="overflow-hidden min-h-screen relative">
        {/* Overlay oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
