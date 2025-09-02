import React from 'react'

export const Hero = () => {
  return (
    <section className='flex items-center justify-center h-screen'>
      <div className='text-center text-white max-w-4xl mx-auto px-6'>
        {/* Slogan principal */}
        <div className='mb-8'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
            <span className='block text-amber-200 text-6xl md:text-8xl font-extrabold mb-2'>COCO</span>
            <span className='block text-white'>URBAN</span>
          </h1>
        </div>
        
        {/* Slogan secundario */}
        <div className='mb-12'>
          <h2 className='text-xl md:text-2xl font-light mb-4 text-gray-200'>
            Pisá fuerte, pisá con estilo
          </h2>
          <p className='text-lg md:text-xl text-amber-100 font-medium'>
            Los mejores sneakers urbanos al precio que mereces
          </p>
        </div>

        {/* CTA Button */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <a className='bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg' href="#">
            Explorar Colección
          </a>
          <a className='border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105' href="#">
            Ver Ofertas
          </a>
        </div>

        {/* Texto adicional */}
        <div className='mt-16 animate-bounce'>
          <p className='text-white/80 text-sm'>
            ↓ Desliza para descubrir más ↓
          </p>
        </div>
      </div>
    </section>
  )
}
