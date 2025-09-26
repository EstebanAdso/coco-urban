import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        {/* Icono de error */}
        <div className="mb-8">
          <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        {/* Título */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        
        {/* Mensaje */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página no encontrada</h2>
        <p className="text-gray-500 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Botones de navegación */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            to="/"
            className="inline-block w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Ir al Inicio
          </Link>
          <Link
            to="/coco-urban/catalogo"
            className="inline-block w-full sm:w-auto border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </div>
  );
};
