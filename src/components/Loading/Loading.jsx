import React from 'react';

export const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* Spinner animado */}
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mb-4"></div>
        
        {/* Texto de carga */}
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Cargando...</h2>
        <p className="text-gray-500">Estamos preparando el contenido para ti</p>
      </div>
    </div>
  );
};
