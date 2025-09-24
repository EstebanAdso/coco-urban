import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { getProductsByCategory, getFeaturedProducts } from '../../utils/products';
import guiaTallas from '../../assets/guiaTallas/guiaTallas.jpeg';

export const Catalogo = () => {
    // Obtener parámetros de la URL
    const { categoria, subcategoria } = useParams();
    const navigate = useNavigate();

    // Estado para controlar qué categoría está activa
    const [activeCategory, setActiveCategory] = useState(categoria || 'caballero');
    // Estado para controlar la subcategoría activa
    const [activeSubcategory, setActiveSubcategory] = useState(subcategoria || null);
    // Estado para almacenar los productos
    const [products, setProducts] = useState([]);
    // Estado para los productos destacados
    const [featuredProducts, setFeaturedProducts] = useState([]);

    // Cargar productos destacados
    useEffect(() => {
        setFeaturedProducts(getFeaturedProducts());
    }, []);

    // Efecto para manejar cambios en la URL
    useEffect(() => {
        if (categoria) {
            // Verificar si la categoría de la URL es válida
            const categoriaValida = categorias.find(cat => cat.id === categoria);

            if (categoriaValida) {
                setActiveCategory(categoria);

                // Si hay subcategoría en la URL, cargarla
                if (subcategoria) {
                    const subcategoriaValida = categoriaValida.subcategorias.find(
                        sub => sub.id === subcategoria
                    );

                    if (subcategoriaValida) {
                        setActiveSubcategory(subcategoria);
                        const categoryProducts = getProductsByCategory(categoria, subcategoria);
                        setProducts(categoryProducts);
                    } else {
                        // Si la subcategoría no es válida, redirigir a la primera subcategoría
                        const primeraSubcategoria = categoriaValida.subcategorias[0]?.id;
                        if (primeraSubcategoria) {
                            navigate(`/catalogo/${categoria}/${primeraSubcategoria}`, { replace: true });
                        }
                    }
                } else {
                    // Si no hay subcategoría, redirigir a la primera subcategoría
                    const primeraSubcategoria = categoriaValida.subcategorias[0]?.id;
                    if (primeraSubcategoria) {
                        navigate(`/catalogo/${categoria}/${primeraSubcategoria}`, { replace: true });
                    }
                }
            } else {
                // Si la categoría no es válida, redirigir a la primera categoría
                const primeraCategoria = categorias[0];
                if (primeraCategoria) {
                    const primeraSubcategoria = primeraCategoria.subcategorias[0]?.id;
                    if (primeraSubcategoria) {
                        navigate(`/catalogo/${primeraCategoria.id}/${primeraSubcategoria}`, { replace: true });
                    } else {
                        navigate(`/catalogo/${primeraCategoria.id}`, { replace: true });
                    }
                }
            }
        }
    }, [categoria, subcategoria, navigate]);

    // Datos de las categorías y subcategorías
    const categorias = [
        {
            id: 'caballero',
            nombre: 'Caballero',
            subcategorias: [
                { id: 'sneakers', nombre: 'Sneakers' },
                { id: 'futsal', nombre: 'Futsal' },
                { id: 'futbol', nombre: 'Fútbol' },
                { id: 'torretin', nombre: 'Torretín' },
                { id: 'chanclas', nombre: 'Chanclas' },
            ]
        },
        {
            id: 'dama',
            nombre: 'Dama',
            subcategorias: [
                { id: 'sneakers', nombre: 'Sneakers' },
                { id: 'futsal', nombre: 'Futsal' },
                { id: 'futbol', nombre: 'Fútbol' },
                { id: 'torretin', nombre: 'Torretín' },
                { id: 'chanclas', nombre: 'Chanclas' },
            ]
        },
        {
            id: 'nino',
            nombre: 'Niño',
            subcategorias: [
                { id: 'sneakers', nombre: 'Sneakers' },
                { id: 'futbol', nombre: 'Fútbol' },
                { id: 'futsal', nombre: 'Futsal' },
                { id: 'torretin', nombre: 'Torretín' },
            ]
        },
        {
            id: 'ropa',
            nombre: 'Ropa',
            subcategorias: [
                { id: 'caballero', nombre: 'Caballero' },
                { id: 'dama', nombre: 'Dama' },
                { id: 'nino', nombre: 'Niño' },
            ]
        }
    ];

    // Obtener la categoría activa
    const categoriaActiva = categorias.find(cat => cat.id === activeCategory) || categorias[0];

    // Manejar el cambio de categoría
    const handleCategoryChange = (categoryId) => {
        const nuevaCategoria = categorias.find(cat => cat.id === categoryId);

        if (nuevaCategoria) {
            // Navegar a la nueva categoría con la primera subcategoría
            if (nuevaCategoria.subcategorias.length > 0) {
                const primeraSubcategoria = nuevaCategoria.subcategorias[0].id;
                navigate(`/catalogo/${categoryId}/${primeraSubcategoria}`);
            } else {
                navigate(`/catalogo/${categoryId}`);
            }
        }
    };

    // Manejar el clic en una subcategoría
    const handleSubcategoryClick = (subcategoryId) => {
        // Navegar a la nueva URL con la categoría y subcategoría seleccionadas
        navigate(`/catalogo/${activeCategory}/${subcategoryId}`);

        // Actualizar el estado local (aunque el efecto se encargará de esto con los parámetros de la URL)
        setActiveSubcategory(subcategoryId);
        const categoryProducts = getProductsByCategory(activeCategory, subcategoryId);
        setProducts(categoryProducts);
    };

    // Estado para controlar la visibilidad del modal de guía de tallas
    const [showSizeGuide, setShowSizeGuide] = useState(false);

    // Función para formatear números al formato colombiano
    const formatNumber = (number) => {
        return number.toLocaleString('es-CO', { 
            minimumFractionDigits: 0, 
            maximumFractionDigits: 2 
        });
    };

    // Función para abrir el modal de guía de tallas
    const openSizeGuide = () => {
        setShowSizeGuide(true);
        document.body.style.overflow = 'hidden'; // Deshabilitar scroll
    };

    // Función para cerrar el modal de guía de tallas
    const closeSizeGuide = () => {
        setShowSizeGuide(false);
        document.body.style.overflow = 'unset'; // Habilitar scroll
    }; 

    // Efecto para limpiar el estilo del body al desmontar el componente
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Barra de navegación */}
            <Navbar />

            {/* Contenido principal */}
            <main className="flex-grow pt-32 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        Catálogo de Productos
                    </h1>

                    {/* Navegación de categorías mejorada */}
                    <div className="mb-12 overflow-x-auto py-4">
                        <div className="flex space-x-3 md:space-x-6 justify-center pb-2 px-4">
                            {categorias.map((categoria) => (
                                <button
                                    key={categoria.id}
                                    onClick={() => handleCategoryChange(categoria.id)}
                                    className={`group relative px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === categoria.id
                                            ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-gray-900 shadow-lg'
                                            : 'bg-white text-gray-700 hover:bg-amber-50 border-2 border-amber-100 hover:border-amber-200'
                                        } whitespace-nowrap flex flex-col items-center min-w-[120px]`}
                                >
                                    <span className="flex items-center gap-2">
                                        {categoria.id === 'caballero' && (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                        )}
                                        {categoria.id === 'dama' && (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        )}
                                        {categoria.id === 'nino' && (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                            </svg>
                                        )}
                                        {categoria.id === 'ropa' && (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                            </svg>
                                        )}
                                        {categoria.nombre}
                                    </span>
                                    <span className={`absolute -bottom-2 h-1 w-8 rounded-full transition-all duration-300 ${activeCategory === categoria.id ? 'bg-amber-500 w-8' : 'bg-transparent group-hover:bg-amber-200 w-4'
                                        }`}></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Subcategorías */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            {categoriaActiva.nombre}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                            {categoriaActiva.subcategorias.map((subcategoria) => (
                                <div
                                    key={subcategoria.id}
                                    onClick={() => handleSubcategoryClick(subcategoria.id)}
                                    className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${activeSubcategory === subcategoria.id
                                            ? 'border-amber-300'
                                            : 'border-transparent hover:border-gray-200'
                                        }`}
                                >
                                    <div className="p-4
                    ">
                                        <h3 className="text-lg font-medium text-gray-800 text-center">
                                            {subcategoria.nombre}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Productos de la subcategoría seleccionada */}
                    {activeSubcategory && products.length > 0 && (
                        <div className="mb-16">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold text-gray-800">
                                    {categoriaActiva.subcategorias.find(s => s.id === activeSubcategory)?.nombre} - {categoriaActiva.nombre}
                                </h2>
                                <div className="h-1 flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-4 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {products.map((producto) => (
                                    <div
                                        key={producto.id}
                                        className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-50 hover:border-gray-100"
                                    >
                                        <div className="relative overflow-hidden">
                                            <div className="aspect-w-1 aspect-h-1 w-full">
                                                <img
                                                    src={producto.imagen}
                                                    alt={producto.nombre}
                                                    className="object-contain h-64 w-full transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Badge Oferta */}
                                            {producto.enOferta && (
                                                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                                    En Promoción
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-700 transition-colors">
                                                {producto.nombre}
                                            </h3>

                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {producto.descripcion}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    {producto.enOferta ? (
                                                        <div className="flex items-baseline">
                                                            <span className="text-xl font-bold text-red-600">
                                                                {producto.precioOferta ? `$${formatNumber(Number(producto.precioOferta))}` : ""}
                                                            </span>
                                                            <span className="ml-2 text-sm text-gray-500 line-through">
                                                                {producto.precio ? `$${formatNumber(Number(producto.precio))}` : ""}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <span className="text-xl font-bold text-gray-900">
                                                            {producto.precio ? `$${formatNumber(Number(producto.precio))}` : ""}

                                                        </span>
                                                    )}
                                                </div>
                                                <a
                                                    href={`https://wa.me/573108873636?text=¡Hola!%20Vengo%20de%20la%20página%20Coco%20Sneaker.%20Me%20interesa%20saber%20más%20sobre%20el%20modelo:%20${encodeURIComponent(producto.nombre)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-md"
                                                >
                                                    Comprar
                                                </a>
                                            </div>

                                            {/* Tallas disponibles */}
                                            <div className="mt-4 pt-4 border-t border-gray-100">
                                                <p className="text-xs text-gray-500 mb-2">Tallas disponibles:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {producto.tallas.slice(0, 5).map((talla, index) => (
                                                        <span
                                                            key={index}
                                                            className="w-8 h-8 flex items-center justify-center text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50 hover:border-gray-300 cursor-pointer"
                                                        >
                                                            {talla}
                                                        </span>
                                                    ))}
                                                    {producto.tallas.length > 5 && (
                                                        <span className="text-xs text-gray-500 flex items-center">+{producto.tallas.length - 5}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Productos destacados */}
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold text-gray-800">
                                Productos Destacados
                            </h2>
                            <div className="h-1 flex-1 bg-gradient-to-r from-amber-300 to-transparent ml-4 rounded-full"></div>
                        </div>

                        {featuredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {featuredProducts.map((producto) => (
                                    <div
                                        key={`featured-${producto.id}`}
                                        className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-amber-50 hover:border-amber-100"
                                    >
                                        <div className="relative overflow-hidden">
                                            <div className="aspect-w-1 aspect-h-1 w-full">
                                                <img
                                                    src={producto.imagen}
                                                    alt={producto.nombre}
                                                    className="object-contain h-64 w-full transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Badge Destacado */}
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    Destacado
                                                </span>
                                            </div>

                                            {/* Badge Oferta */}
                                            {producto.enOferta && (
                                                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                                    En Promoción
                                                </div>
                                            )}
                                        </div>


                                            {/* Productos destacados */}
                                        <div className="p-5">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-amber-600 transition-colors">
                                                    {producto.nombre}
                                                </h3>
                                            </div>

                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {producto.descripcion}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    {producto.enOferta ? (
                                                        <div className="flex items-baseline">
                                                            <span className="text-xl font-bold text-red-600">
                                                                {`$${producto.precioOferta}`}
                                                            </span>
                                                            <span className="ml-2 text-sm text-gray-500 line-through">
                                                                {`$${producto.precio}`}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <span className="text-xl font-bold text-gray-900">
                                                            {producto.precio ? `$${formatNumber(Number(producto.precio))}` : ""}
                                                        </span>
                                                    )}
                                                </div>
                                                <a
                                                    href={`https://wa.me/573108873636?text=¡Hola!%20Vengo%20de%20la%20página%20Coco%20Sneaker.%20Me%20interesa%20saber%20más%20sobre%20el%20modelo:%20${encodeURIComponent(producto.nombre)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-md"
                                                >
                                                    Comprar
                                                </a>
                                            </div>

                                            {/* Tallas disponibles */}
                                            <div className="mt-4 pt-4 border-t border-gray-100">
                                                <p className="text-xs text-gray-500 mb-2">Tallas disponibles:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {producto.tallas.slice(0, 5).map((talla, index) => (
                                                        <span
                                                            key={index}
                                                            className="w-8 h-8 flex items-center justify-center text-sm font-medium border border-gray-200 rounded-md hover:bg-amber-50 hover:border-amber-200 cursor-pointer"
                                                        >
                                                            {talla}
                                                        </span>
                                                    ))}
                                                    {producto.tallas.length > 5 && (
                                                        <span className="text-xs text-gray-500 flex items-center">+{producto.tallas.length - 5}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-600">No hay productos destacados por el momento.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Botón flotante de guía de tallas mejorado - Responsive */}
            <button 
                onClick={openSizeGuide}
                className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-amber-500 hover:bg-amber-600 text-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center space-x-1 sm:space-x-2"
                aria-label="Ver guía de tallas"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Guía de Tallas</span>
            </button>

            {/* Modal de guía de tallas mejorado - Responsive */}
            {showSizeGuide && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4" onClick={closeSizeGuide}>
                    <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-2 sm:mx-4 overflow-hidden" onClick={e => e.stopPropagation()}>
                        {/* Encabezado del modal */}
                        <div className="flex justify-between items-center p-3 sm:p-4 border-b">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Guía de Tallas</h3>
                            <button 
                                onClick={closeSizeGuide}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Cerrar"
                            >
                                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Contenido del modal */}
                        <div className="max-h-[75vh] sm:max-h-[70vh] overflow-y-auto p-3 sm:p-4 md:p-6">
                            <div className="bg-gray-50 p-2 sm:p-3 md:p-4 rounded-lg">
                                <img 
                                    src={guiaTallas} 
                                    alt="Guía de tallas" 
                                    className="w-full h-auto rounded-md shadow-sm"
                                    style={{ maxHeight: '50vh' }}
                                />
                            </div>
                            
                            <div className="mt-4 sm:mt-6 text-center">
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                    Utiliza esta guía para encontrar tu talla perfecta.
                                </p>
                                <button
                                    onClick={closeSizeGuide}
                                    className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                                >
                                    Entendido
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
