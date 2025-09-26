import React from 'react'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section className='flex items-center justify-center h-screen'>
      <div className='text-center text-white max-w-4xl mx-auto px-6'>
        {/* Slogan principal */}
        <div className='mb-8 mt-10'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight'>
            <span className='block text-amber-200 text-5xl sm:text-6xl md:text-8xl font-extrabold mb-1 sm:mb-2'>COCO</span>
            <span className='block text-white text-4xl sm:text-5xl md:text-7xl'>URBAN</span>
          </h1>
        </div>
        
        {/* Slogan secundario */}
        <div className='mb-8 sm:mb-12 px-2 sm:px-0'>
          <h2 className='text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-4 text-gray-200'>
            Pisá fuerte, pisá con estilo
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-amber-100 font-medium'>
            Los mejores sneakers urbanos al precio que mereces
          </p>
        </div>

        {/* CTA Button */}
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0'>
          <Link 
            to="/coco-urban/catalogo" 
            className='w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center'
          >
            Explorar Colección
          </Link>
          <Link to="/coco-urban/catalogo/caballero/ofertas" className='w-full sm:w-auto border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105' href="#">
            Ver Ofertas
          </Link>
        </div>

        {/* Texto adicional */}
        <div className='mt-12 sm:mt-16 animate-bounce'>
          <p className='text-white/80 text-xs sm:text-sm'>
            ↓ Desliza para descubrir más ↓
          </p>
        </div>
      </div>
    </section>
  )
}
