import React from 'react'
import caballeroImg from '../../assets/category/caballero.jpeg'
import damaImg from '../../assets/category/dama.jpeg'
import ninioImg from '../../assets/category/Ninio.jpeg'

export const Category = () => {
  const categorias = [
    {
      id: 'caballero',
      titulo: 'Caballero',
      imagen: caballeroImg,
      descripcion: 'Descubre nuestra colección masculina'
    },
    {
      id: 'dama',
      titulo: 'Dama',
      imagen: damaImg,
      descripcion: 'Explora nuestros diseños femeninos'
    },
    {
      id: 'ninio',
      titulo: 'Niño',
      imagen: ninioImg,
      descripcion: 'Encuentra el estilo perfecto para los pequeños'
    }
  ]

  const manejarClick = (categoria) => {
    // Navegación a cada sección
    console.log(`Navegando a la sección: ${categoria}`)
    // Aquí se puede implementar la navegación real
  }

  return (
    <section className="py-16 px-5 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-12 uppercase tracking-wider">
          Nuestras Categorías
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
          {categorias.map((categoria) => (
            <div 
              key={categoria.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer max-w-sm w-full hover:-translate-y-2 group flex flex-col h-full"
              onClick={() => manejarClick(categoria.id)}
            >
              <div className="h-72 overflow-hidden rounded-t-2xl">
                <img 
                  src={categoria.imagen} 
                  alt={categoria.titulo}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8 text-center flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                  {categoria.titulo}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {categoria.descripcion}
                </p>
                <button className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:from-gray-600 hover:to-gray-400 hover:-translate-y-1 mt-auto">
                  Ver Colección
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
