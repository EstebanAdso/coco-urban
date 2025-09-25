import React from 'react'
import { useNavigate } from 'react-router-dom'
import caballeroImg from '/images/category/caballeroCalzado.jpeg'
import caballeroRopaImg from '/images/category/caballeroRopa.jpeg'
import damaImg from '/images/category/damaCalzado.jpeg'
import damaRopaImg from '/images/category/damaRopa.png'
import ninioImg from '/images/category/NinioCalzado.jpeg'
import ninioRopaImg from '/images/category/ninioRopa.jpg'

export const Category = () => {
  const navigate = useNavigate();

  const categoriasCalzado = [
    {
      id: 'caballero',
      titulo: 'Caballero',
      imagen: caballeroImg,
      descripcion: 'Descubre nuestra colección masculina',
      link: '/catalogo/caballero/sneakers'
    },
    {
      id: 'dama',
      titulo: 'Dama',
      imagen: damaImg,
      descripcion: 'Explora nuestros diseños femeninos',
      link: '/catalogo/dama/sneakers'
    },
    {
      id: 'ninio',
      titulo: 'Niño',
      imagen: ninioImg,
      descripcion: 'Encuentra el estilo perfecto para los pequeños',
      link: '/catalogo/nino/sneakers'
    }
  ]

    const categoriasRopa = [
    {
      id: 'caballero',
      titulo: 'Caballero',
      imagen: caballeroRopaImg,
      descripcion: 'Descubre nuestra colección de ropa masculina',
      link: '/catalogo/ropa/caballero'
    },
    {
      id: 'dama',
      titulo: 'Dama',
      imagen: damaRopaImg,
      descripcion: 'Explora nuestros diseños en ropa femeninos',
      link: '/catalogo/ropa/dama'
    },
    {
      id: 'ninio',
      titulo: 'Niño',
      imagen: ninioRopaImg,
      descripcion: 'Encuentra el estilo perfecto para los pequeños',
      link: '/catalogo/ropa/nino'
    }
  ]

  const manejarClick = (categoria) => {
    if (categoria.link) {
      navigate(categoria.link);
      console.log(`Navegando a: ${categoria.link}`);
    } else {
      console.error('No se encontró el enlace para la categoría:', categoria.id);
    }
  };

  return (
    <section className="py-16 px-5 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-gray-900 mb-12 uppercase tracking-wider">
          Nuestras Categorías en Calzado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10 justify-items-center">
          {categoriasCalzado.map((categoria) => (
            <div
              key={categoria.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer max-w-sm w-full hover:-translate-y-2 group flex flex-col h-full"
              onClick={() => manejarClick(categoria)}
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
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    manejarClick(categoria);
                  }}
                  className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:from-gray-600 hover:to-gray-400 hover:-translate-y-1 mt-auto"
                >
                  Ver Colección
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20">

        <h2 className="text-center text-4xl font-bold text-gray-900 mb-12 uppercase tracking-wider">
          Nuestras Categorías en Ropa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10 justify-items-center">
          {categoriasRopa.map((categoria) => (
            <div
              key={categoria.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer max-w-sm w-full hover:-translate-y-2 group flex flex-col h-full"
              onClick={() => manejarClick(categoria)}
            >
              <div className="h-72 overflow-hidden rounded-t-2xl">
                <img
                  src={categoria.imagen}
                  alt={categoria.titulo}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8 text-center flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                  {categoria.titulo}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {categoria.descripcion}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    manejarClick(categoria);
                  }}
                  className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:from-gray-600 hover:to-gray-400 hover:-translate-y-1 mt-auto"
                >
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
