// Importar productos de archivos separados
import { caballeroProducts, setCurrentId as setCaballeroId, getCurrentId as getCaballeroId } from './caballero.js';
import { damaProducts, setCurrentId as setDamaId, getCurrentId as getDamaId } from './dama.js';
import { ninoProducts, setCurrentId as setNinoId, getCurrentId as getNinoId } from './nino.js';
import { ropaProducts, setCurrentId as setRopaId, getCurrentId as getRopaId } from './ropa.js';

// Contador global para generar IDs únicos
let currentId = 0;

// Inicializar contadores en cada archivo de forma secuencial
setCaballeroId(currentId);
currentId = getCaballeroId();

setDamaId(currentId);
currentId = getDamaId();

setNinoId(currentId);
currentId = getNinoId();

setRopaId(currentId);
currentId = getRopaId();

// Combinar todos los productos
export const products = {
  caballero: caballeroProducts,
  dama: damaProducts,
  nino: ninoProducts,
  ropa: ropaProducts
};

// Función para obtener productos por categoría y subcategoría
export const getProductsByCategory = (category, subcategory) => {
  if (products[category] && products[category][subcategory]) {
    return products[category][subcategory];
  }
  return [];
};

// Función para obtener productos destacados (máximo 4 aleatorios)
export const getFeaturedProducts = () => {
  const allFeatured = [];
  
  // Recorrer todas las categorías y subcategorías
  Object.keys(products).forEach(category => {
    Object.keys(products[category]).forEach(subcategory => {
      // Filtrar productos destacados
      const featuredInSubcategory = products[category][subcategory].filter(
        product => product.destacado
      );
      allFeatured.push(...featuredInSubcategory);
    });
  });
  
  // Mezclar aleatoriamente el array
  const shuffled = allFeatured.sort(() => 0.5 - Math.random());
  
  // Devolver máximo 4 productos
  return shuffled.slice(0, 4);
};

// Función para obtener productos en oferta por categoría
export const getOffersByCategory = (category) => {
  const offers = [];
  
  if (products[category]) {
    // Si es la categoría 'ropa', manejar la estructura diferente
    if (category === 'ropa') {
      Object.keys(products[category]).forEach(subcategory => {
        const offersInSubcategory = products[category][subcategory].filter(
          product => product.enOferta === true
        );
        offers.push(...offersInSubcategory);
      });
    } else {
      // Para otras categorías (caballero, dama, nino)
      Object.keys(products[category]).forEach(subcategory => {
        const offersInSubcategory = products[category][subcategory].filter(
          product => product.enOferta === true
        );
        offers.push(...offersInSubcategory);
      });
    }
  }
  
  return offers;
};
